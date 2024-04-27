import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../styles/assignments.css'

const AddGrade = (props) => {
    const [gradeError, setGradeError] = useState('')
    
    const onButtonClick = () => {
        const class_input = document.getElementById("classes");
        const assignment_input = document.getElementById("assign");
        const student_input = document.getElementById("student");
        const score_input = document.getElementById("score");
        const max_score_input = document.getElementById("max_score")
        var backendresponse = "";

        if(score_input.value ==='' || assignment_input.value === "" || max_score_input.value ===""){
            setGradeError("complete all fields")
        }
        else {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                    backendresponse = this.response;
                    if(backendresponse === "exists"){
                        setGradeError("Score Updated!");
                    }
                    else {
                        setGradeError("Score Added!");
                    }
                }
            }
            const gradeJSON = {"class": class_input.value,
                "assignment_name": assignment_input.value,
                "student": student_input.value,
                "score": score_input.value,
                "max" : max_score_input.value};
            //TODO update path for server
            request.open("POST", "http://localhost/PHPBackEnd/addGrade.php");
            request.send(JSON.stringify(gradeJSON));
        }

    }

    return (
        <div className={'AGmainContainer'}>
            <div className={'titleContainer'}>
                <div>Add Grade</div>
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
                    id="assign"
                />
            </div>
            <div>
                <label htmlFor="student">Choose Student: </label>
                <select name="student" id="student">
                    <option value="John">John</option>
                    <option value="Joe">Joe</option>
                    <option value="Jack">Jack</option>
                </select>
            </div>
            <div className={'AinputContainer'}>
                <input
                    placeholder="Students's Score"
                    type="number"
                    id="score"
                />
            </div>
            <div className={'NAinputContainer'}>
                <input
                    placeholder="Max Points"
                    type="number"
                    id="max_score"
                />
            </div>
            <label className="AGerrorLabel">{gradeError}</label>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create'}/>
            </div>
        </div>
    )
}

export default AddGrade
