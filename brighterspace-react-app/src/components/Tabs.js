import { useState } from "react";
import "../styles/Tabs.css";

export default function Tabs({ activeTab, setActiveTab, page }) {

    const [username, setUsername] = useState("Not ME");

    fetch("http://localhost/s24semesterproject-brighterspace/PHPBackEnd/classDatabase.php?data=student_name", {
        method: "GET"
    })
    .then(response => response.text())
    .then(data => {
        console.log("student_name:", data); //testing purposes (this should be unused)
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
                    </>
                )}
            </div>
            <div class="profile">
                {username}
            </div>
        </nav>
    )
}