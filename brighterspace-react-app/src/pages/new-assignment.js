import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../styles/assignments.css'

const NewAssignment = (props) => {
    const [assignmentError, setAssignmentError] = useState('')

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    const onButtonClick = () => {
        const class_input = document.getElementById("classes");
        const assignment_input = document.getElementById("assignmentName");
        const points_input = document.getElementById("points")
        var backendresponse = ""

        if(assignment_input.value === '' || points_input.value === ''){
            setAssignmentError("Complete all fields!")
        }
        else{
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                    backendresponse = this.response;
                    if(backendresponse === "False, exists"){
                        setAssignmentError("Assignment already added!")
                    }
                    else {
                        setAssignmentError("Added!")
                    }
                }
            }
            const creatAssignJSON = {"class": class_input.value,
                "assignment_name": assignment_input.value,
                "max_points": points_input.value};
            //TODO update path for server
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/createAssignment.php");
            request.send(JSON.stringify(creatAssignJSON));
        }

    }

    return (
        <div className={'NAmainContainer'}>
            <div className={'titleContainer'}>
                <div>Create Assignment</div>
            </div>
            <div>
                <label htmlFor="classes">Choose Class: </label>
                <select name="classes" id="classes">
                    <option value="cse_312">CSE 312</option>
                    <option value="cse_442">CSE 442</option>
                    <option value="eas_360">EAS 360</option>
                </select>
            </div>
            <div className={'AinputContainer'}>
                <input
                    placeholder="Name of Assignment"
                    type="text"
                    id="assignmentName"
                />
            </div>
            <div className={'NAinputContainer'}>
                <input
                    placeholder="Max Points"
                    type="number"
                    id="points"
                />
            </div>
            <label className="NAerrorLabel">{assignmentError}</label>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create'}/>
            </div>
        </div>
    )
}

export default NewAssignment