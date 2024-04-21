import { useState } from "react";
import "./Tabs.css";
import { Link, Navigate } from "react-router-dom";

export default function Tabs({ activeTab, setActiveTab, page }) {

    const [username, setUsername] = useState("InvalidUser");

    fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/studentHomeDatabase?data=student_name", {
        method: "GET"
    })
    .then(response => response.text())
    .then(data => {
        console.log("username:", data); //testing purposes
        setUsername(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <nav class="tabs">
            <a>Logo</a>
            <div class="tabButtons">
                {page === "StudentHome" && (
                    <>
                        <button onClick={() => handleTabClick("classes")} className={activeTab === "classes" ? 'active' : ''}>Classes</button>
                        <button onClick={() => handleTabClick("allgrades")} className={activeTab === "allgrades" ? 'active' : ''}>Grades</button>
                        <button onClick={() => handleTabClick("allassignments")} className={activeTab === "allassignments" ? 'active' : ''}>Assignments</button>
                    </>
                )}
                {page === "TeacherHome" && (
                    <>
                        <button onClick={() => handleTabClick("classrooms")} className={activeTab === "classrooms" ? 'active' : ''}>Classes</button>
                        <button onClick={() => handleTabClick("addclass")} className={activeTab === "addclass" ? 'active' : ''}>Create Classroom</button>
                        <button onClick={() => handleTabClick("enrollstudents")} className={activeTab === "enrollstudents" ? 'active' : ''}>Enroll Students</button>
                    </>
                )}
                {page === "StudentClassPage" && (
                    <>
                        <button onClick={() => handleTabClick("grades")} className={activeTab === "grades" ? 'active' : ''}>Grades</button>
                        <button onClick={() => handleTabClick("assignments")} className={activeTab === "assignments" ? 'active' : ''}>Assignments</button>
                    </>
                )}
                {page === "TeacherClassPage" && (
                    <>
                        <button onClick={() => handleTabClick("syllabus")} className={activeTab === "syllabus" ? 'active' : ''}>Syllabus</button>
                        <button onClick={() => handleTabClick("recording")} className={activeTab === "recording" ? 'active' : ''}>Upload Recordings</button>
                    </>
                )}
            </div>
            <div class="profile">
                <Link to="/overview">{username}</Link>
            </div>
        </nav>
    )
}