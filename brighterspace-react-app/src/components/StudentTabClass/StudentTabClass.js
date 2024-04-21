import "./StudentTabClass.css"
import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";



export default function StudentTabClass () {

    const [classList, setClassList] = useState(["If you see this, it means it didnt get the class list"]);
    useEffect(() => {
        console.log("entered useEffect");
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/studentHomeDatabase.php?data=class_list", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log("class_list:", data); //testing purposes
            setClassList(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }, []);

    const navigate = useNavigate();

    function generateClassList() {
        return classList.map(currClass => (
            <li key={currClass} onClick={() => navigate(`/class/${currClass}`)}>
                {currClass}
            </li>
        ));
    }

    return(
        <>
            <div class="coreStudentTabClass">
                <div class="classes">
                    <ul>
                        {generateClassList()}
                    </ul>
                </div>
            </div>
        </>
    )
}