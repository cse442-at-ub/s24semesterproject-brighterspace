import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../styles/grade.css'

const Grades = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        fetchGrades();
    }, []);


    function generateTable(intput){
        const gradeObj = JSON.parse(intput);
        const keys = Object.keys(gradeObj);

        let text = "";
        let i = 0;
        for (let x in gradeObj) {
            const class_name = keys[i].split("_");
            text += "<h2>" + class_name[0].toUpperCase() + class_name[1] + "</h2>";
            text += "<table> <tr><th>Assignment</th><th>Score</th></tr>";
            const gradeArray = gradeObj[x].split("&");
            for (let y in gradeArray){
                const assignmentArray = gradeArray[y].split(":");
                text += "<tr><td>"+ assignmentArray[0] +"</td><td>" + assignmentArray[1] + "</td></tr>";
            }
            text += "</table>";
            i++;
        }
        document.getElementById("gradesTable").innerHTML = text;
    }

    function fetchGrades(){
        const request = new XMLHttpRequest();
        let username = getUserFromCookie();
        //let backend_response = "";

        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.response);
                generateTable(this.response);
            }
        }
        const gradeJSON = {"name": username};
        //TODO update path for php
        request.open("POST", "http://localhost/PHPBackEnd/grades.php");
        request.send(JSON.stringify(gradeJSON));

    }

    function getUserFromCookie (){
        let cookie = decodeURI(document.cookie);
        let cookie_array = cookie.split(';');
        for(let i = 0; i < cookie_array.length; i++){
            let c = cookie_array[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf("username=") === 0) {
                return c.substring("username=".length, c.length);
            }
        }
        return "";
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Grades</div>
            </div>
            <div id="gradesTable" className={'gradesTable'}>

            </div>

        </div>
    )
}

export default Grades
