import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const NewAssignment = (props) => {

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    const onButtonClick = () => {
        const class_input = document.getElementById("classes");
        const assignment_input = document.getElementById("assignmentName");
        const points_input = document.getElementById("points")

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.response);
            }
        }
        const creatAssignJSON = {"class": class_input.value,
                                        "assignment_name": assignment_input.value,
                                        "max_points": points_input.value};
        //request.open("POST", "http://localhost:3000/PHPBackEnd/functionLoginIn.php");
        request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/functionLoginIn.php");
        request.send(JSON.stringify(creatAssignJSON));
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Create Assignment</div>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'}/>
            </div>
            <br/>
            <div>
                <label htmlFor="classes">Choose Class: </label>
                <select name="classes" id="classes">
                    <option value="cse312">CSE 312</option>
                    <option value="cse442">CSE 442</option>
                    <option value="eas360">EAS 360</option>
                </select>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    placeholder="Name of Assignment"
                    type="text"
                    id="assignmentName"
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    placeholder="Max Points"
                    className={'inputBox'}
                    id="points"
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create'}/>
            </div>
        </div>
    )
}

export default NewAssignment