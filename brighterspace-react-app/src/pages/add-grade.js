import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const AddGrade = (props) => {

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    const onButtonClick = () => {
        const class_input = document.getElementById("classes");
        const assignment_input = document.getElementById("assign");
        const student_input = document.getElementById("student")
        const score_input = document.getElementById("score")

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.response);
            }
        }
        const gradeJSON = {"class": class_input.value,
            "assignment_name": assignment_input.value,
            "student": student_input.value,
            "score": score_input.value};
        //request.open("POST", "http://localhost:3000/PHPBackEnd/functionLoginIn.php");
        request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/functionLoginIn.php");
        request.send(JSON.stringify(gradeJSON));
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Add Grade</div>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'} />
            </div>
            <br />
            <div>
                <label htmlFor="classes">Choose Class: </label>
                <select name="classes" id="classes">
                    <option value="cse312">CSE 312</option>
                    <option value="cse442">CSE 442</option>
                    <option value="eas360">EAS 360</option>
                </select>
            </div>
            <br/>
            <div>
                <label htmlFor="assignments">Choose Assignment:  </label>
                <select name="assign" id="assign">
                    <option value="hw1">HW 1</option>
                    <option value="hw2">HW 2</option>
                    <option value="hw3">HW 3</option>
                </select>
            </div>
            <br/>
            <div>
                <label htmlFor="student">Choose Student: </label>
                <select name="student" id="student">
                    <option value="John">John</option>
                    <option value="Joe">Joe</option>
                    <option value="Jack">Jack</option>
                </select>
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    placeholder="Students's Score"
                    type="text"
                    id="score"
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create'} />
            </div>
        </div>
    )
}

export default AddGrade