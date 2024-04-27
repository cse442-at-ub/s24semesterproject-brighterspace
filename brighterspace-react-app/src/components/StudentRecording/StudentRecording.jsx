import "./StudentRecording.css"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function StudentRecording () {

    // const [listOfRecording, setListOfRecording] = useState(null);
    const placeHolder = {
        "video": "../../PHPBackEnd/uploads/file_example_MP4_480_1_5MG.mp4",
        "title": "Not Working",
        "classroom": "CSE442"
    }

    const [listOfRecording, setListOfRecording] = useState([]);
    useEffect(() => {
        console.log("Loading fetch"); //testing purposes
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/videoUpload.php?data=video", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log("recordings:", data.videos); //testing purposes
            setListOfRecording(data.videos);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }, []);

    function generateVideoList() {
        if (listOfRecording.length === 0) {
            return <li>Loading...</li>;
        }

        return listOfRecording.map(e => (
            <li key={e.title}>
                <h2>{e.title}</h2>
                <p>{e.classroom}</p>
                <video width="400" controls="" autoplay="" muted="">
                    <source src={"../../PHPBackEnd/"+e.video} type="video/mp4"/>
                </video>
            </li>
        ));
    }

    return (
        <>
            <div class="core-StudentRecording">
                <div class="recordings">
                    <ul>
                        {generateVideoList()}
                    </ul>
                </div>
            </div>
        </>
    );
}