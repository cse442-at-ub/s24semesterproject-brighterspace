import "../styles/StudentTabClass.css"
import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";



export default function StudentTabClass () {

    const [classList, setClassList] = useState(["If you see this, it means it didnt get the class list"]);

    fetch("http://localhost:8000/studentHomeDatabase.php", {
        method: "GET"
    })
    .then(response => {
        if (response.headers.has("StudentName") && response.headers.has("ClassList")) {

        const returnedClassList = response.headers.get("ClassList");
        setClassList(returnedClassList);

        console.log("Class List:", returnedClassList); //testing purposes
        } else {
        console.error("Missing headers in response");
        }
        
        return response.json();
    })
    .then(data => {
        console.log("data:", data); //testing purposes (this should be unused)
    })
    .catch(error => {
        console.error("Error:", error);
    });

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