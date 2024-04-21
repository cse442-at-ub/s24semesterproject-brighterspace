import "./TeacherEnrollStudent.css"
import { useEffect, useState } from "react"

export default function TeacherEnrollStudent() {

    const [classroomList, setClassroomList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz"]);
    const [studentList, setStudentList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz", "asd", "asds", "asad", "asdds", "asadsd", "asadsd", "asadsd", "asadsd", "asadsd"]);

    const [selectedClassroom, setSelectedClassroom] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    const [classroomSearch, setClassroomSearch] = useState("");
    const [studentSearch, setStudentSearch] = useState("");

    const [classroomError, setClassroomError] = useState("");
    const [studentError, setStudentError] = useState("");

    const [classroomIsOpen, setClassroomIsOpen] = useState(false);
    const [studentIsOpen, setStudentIsOpen] = useState(false);

    const [valid, setValid] = useState(true);

    function highlightText(event) {
        event.target.select();
    }

    function handleClassroomChange(event) {
        const searchValue = event.target.value;
        setClassroomSearch(searchValue);
        setSelectedClassroom("");
    }

    function handleClassroomClick(input) {
        const classroomValue = input;
        setSelectedClassroom(classroomValue);
        document.getElementById("searchClassroomInput").value = classroomValue;
        setClassroomIsOpen(false);
    }

    function handleStudentChange(event) {
        const searchValue = event.target.value;
        setStudentSearch(searchValue);
        setSelectedStudent("");
    }

    function handleStudentClick(input) {
        const studentValue = input;
        setSelectedStudent(studentValue);
        document.getElementById("searchStudentInput").value = studentValue;
        setStudentIsOpen(false);
    }

    //these should recieve the 2 list(students and classroom)
    function load () {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/classNames.php")
        .then(response => response.json())
        .then(arrayOfClassrooms => {
            setClassroomList(arrayOfClassrooms);
        })
        .catch(error => console.error('Error:', error));

        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/studentNames.php")
        .then(response => response.json())
        .then(arrayOfStudents => {
            setStudentList(arrayOfStudents);
        })
        .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        // load();
    },[]);

    function handleSubmission () {
        var valid = true;
        //verify submission
        if(selectedClassroom === ""){
            setClassroomError("Select a classroom");
            valid = false;
        }else if(!classroomList.includes(selectedClassroom)){
            setClassroomError("Select an existing classroom from the dropdown");
            valid = false;
        }else{
            setClassroomError("");
        }
        if(selectedStudent === ""){
            setStudentError("Select a student");
            valid = false;
        }else if(!studentList.includes(selectedStudent)){
            setClassroomError("Select an existing student from the dropdown");
            valid = false;
        }else{
            setStudentError("");
        }
        if(!valid){
            console.log("invalid");
            return;
        }
        console.log("valid");

        //send data
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
        setSelectedClassroom("");
        document.getElementById("searchStudentInput").value = "";
        document.getElementById("searchClassroomInput").value = "";
    }

    return(
        <>
            <div class="core-TeacherEnrollStudent">
                <h2>Classroom:</h2>
                <div class="classroomDropdown">
                    <input
                        type="text"
                        id="searchClassroomInput"
                        autocomplete="off"
                        onChange={handleClassroomChange}
                        onFocus={(event) => {
                            setClassroomIsOpen(true);
                            event.target.select();
                        }}
                        onBlur={() => setTimeout(() => setClassroomIsOpen(false), 200)}
                        placeholder="Search classrooms"
                    />
                    {classroomIsOpen && (
                        <ul class="classroomOptions">
                        {classroomList
                            .filter((option) =>
                            option.toLowerCase().includes(classroomSearch.toLowerCase())
                            )
                            .map((option) => (
                            <li key={option} onClick={() => handleClassroomClick(option)}>
                                {option}
                            </li>
                            ))}
                        </ul>
                    )}
                </div>
                <p>{classroomError}</p>
                <h2>Student:</h2>
                <div class="studentDropdown">
                    <input
                        type="text"
                        id="searchStudentInput"
                        autocomplete="off"
                        onChange={handleStudentChange}
                        onFocus={(event) => {
                            setStudentIsOpen(true);
                            event.target.select();
                        }}
                        onBlur={() => setTimeout(() => setStudentIsOpen(false), 200)}
                        placeholder="Search students"
                    />
                    {studentIsOpen && (
                        <ul class="studentOptions">
                        {studentList
                            .filter((option) =>
                            option.toLowerCase().includes(studentSearch.toLowerCase())
                            )
                            .map((option) => (
                            <li key={option} onClick={() => handleStudentClick(option)}>
                                {option}
                            </li>
                            ))}
                        </ul>
                    )}
                </div>
                <p>{studentError}</p>
                <br></br>
                <div class="submitButton">
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </>
    )
}