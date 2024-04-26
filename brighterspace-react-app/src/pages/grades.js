import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Grades = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        generateTable();
    }, []);


    function generateTable(){
        /*
        const gradeObj = JSON.parse(fetchGrades());
        let text = "<table>"
        for (let x in gradeObj) {
            text += "<tr><td>" + gradeObj[x] + "</td></tr>";
        }
        text += "</table>"
        document.getElementById("gradesTable").innerHTML = text;
         */
    }
    function fetchGrades(){
        const request = new XMLHttpRequest();
        let username = getUserFromCookie();
        let backend_response = "";

        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.response);
                backend_response = this.response;
            }
        }
        const gradeJSON = {"name": username};
        //TODO update path for php
        request.open("POST", "student grades php");
        request.send(JSON.stringify(gradeJSON));

        return backend_response;
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
            <div id="gradesTable">

            </div>

        </div>
    )
}

export default Grades