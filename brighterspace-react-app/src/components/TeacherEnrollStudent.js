import { useEffect, useState } from "react"



export default function TeacherEnrollStudent() {

    const [classroomList, setClassroomList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz"]);
    const [studentList, setStudentList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz"]);

    const [classroomResult, setClassroomResult] = useState([]);
    const [studentResult, setStudentResult] = useState([]);

    const [selectedClassroom, setSelectedClassroom] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    const [valid, setValid] = useState("");

    function search(){

    }

    function updateClassroomResult(event) {
        const searchValue = event.target.value.toUpperCase();
    
        if(searchValue === ""){
            setClassroomResult([]);
        }
        else{
            setClassroomResult(classroomList.filter((e) => e.toUpperCase().includes(searchValue)));
        }

    }

    function updateStudentResult(event) {
        const searchValue = event.target.value.toUpperCase();
    
        if(searchValue === ""){
            setStudentResult([]);
        }
        else{
            setStudentResult(studentList.filter((e) => e.toUpperCase().includes(searchValue)));
        }

    }

    function highlightText(event) {
        event.target.select();
    }

    function recordClassroom(event) {
        const classroomValue = event.target.innerText;
        setSelectedClassroom(classroomValue);
        document.getElementById("searchClassroomInput").value = "";
        updateClassroomResult({ target: { value: '' } });
    }

    function recordStudent(event) {
        const studentValue = event.target.innerText;
        setSelectedStudent(studentValue);
        //document.getElementById("searchStudentInput").value = "";
        //updateStudentResult({ target: { value: '' } });
    }

    //these should recieve the 2 list(students and classroom)
    function load () {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/classNames.php")
        .then(response => response.json())
        .then(arrayOfClassrooms => {
            console.log("Array of Classrooms:" + arrayOfClassrooms);
            setClassroomList(arrayOfClassrooms);
        })
        .catch(error => console.error('Error:', error));

        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/studentNames.php")
        .then(response => response.json())
        .then(arrayOfStudents => {
            console.log("Array of Students:" + arrayOfStudents);
            setStudentList(arrayOfStudents);
        })
        .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        load();
    },[]);

    function handleSubmission () {
        //verify submission
        if(selectedClassroom === "" || selectedStudent === ""){
            console.log("invalid");
            setValid("Invalid - At least One of the input is empty");
            return;
        }
        if(!classroomList.includes(selectedClassroom) || !studentList.includes(selectedStudent)){
            console.log("invalid");
            setValid("Invalid - Inputs aren't from the search bar");
            return;
        }
        //send data
        console.log("valid");
        setValid("");
        const dataToSend = {
            class_id: selectedClassroom,
            student_id: selectedStudent
        };
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/classDatabase.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        //prep form again
        setSelectedStudent("");
    }

    return(
        <>
            <div class="core">
                <div class="inputMenu">
                    <div class="classListInput">
                        <div class="searchBar">
                            <input
                                id="searchClassroomInput"
                                type="text"
                                placeholder="Search Class"
                                onInput={updateClassroomResult}
                                onFocus={highlightText}
                            />
                        </div>
                        <div class="searchResult">
                            <ul>
                                {
                                classroomResult.map((currClassroom) => (
                                    <li>
                                    <button onClick={recordClassroom}>{currClassroom}</button>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="studentListImput">
                        <div class="searchBar">
                            <input
                                id="searchStudentInput"
                                type="text"
                                placeholder="Search Student"
                                onInput={updateStudentResult}
                                onFocus={highlightText}
                            />
                        </div>
                        <div class="searchResult">
                            <ul>
                                {
                                studentResult.map((currClassroom) => (
                                    <li>
                                    <button onClick={recordStudent}>{currClassroom}</button>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="confirmation">
                    <div class="preview">
                        <p>Selected Classroom: {selectedClassroom}</p>
                        <p>Seletced Student: {selectedStudent}</p>
                    </div>
                    <div class="submitButton">
                        <button onClick={handleSubmission}>Submit</button>
                        <p>{valid}</p>
                    </div>
                </div>
            </div>
        </>
    )
}