import "../styles/StudentTabClass.css"
import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";



export default function StudentTabClass () {

    const [classList, setClassList] = useState(["If you see this, it means it didnt get the class list", "Here", "are", "some", "example", "classes", "CSE442", "CSE241", "MTH241"]);

    useEffect(() => {
        fetch("http://localhost/s24semesterproject-brighterspace/PHPBackEnd/classDatabase.php?data=class_list", {
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