import { useEffect, useState } from "react"



export default function TeacherEnrollStudent() {

    const [classroomList, setClassroomList] = useState(["This", "is", "tesing", "for", "class", "list"]);
    const [studentList, setStudentList] = useState(["This", "is", "tesing", "for", "student", "list"]);

    const [classroomResult, setClassroomResult] = useState([]);
    const [studentResult, setStudentResult] = useState([]);

    const [selectedClassroom, setSelectedClassroom] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

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
    }

    function recordStudent(event) {
        const studentValue = event.target.innerText;
        setSelectedStudent(studentValue);
        document.getElementById("searchStudentInput").value = "";
        setStudentResult({ target: { value: '' } });
    }

    //these should recieve the 2 list(students and classroom)
    function load () {
        fetch("http://localhost:8000/TeacherEnrollStudentsTest.php?data=classrooms")
        .then(response => response.json())
        .then(arrayOfClassrooms => {
            console.log("Array of Classrooms:" + arrayOfClassrooms);
        })
        .catch(error => console.error('Error:', error));

        fetch("http://localhost:8000/TeacherEnrollStudentsTest.php?data=students")
        .then(response => response.json())
        .then(arrayOfStudents => {
            console.log("Array of Students:" + arrayOfStudents);
        })
        .catch(error => console.error('Error:', error));
        console.log("Hello");
    }

    useEffect(() => {
        load();
    },[]);

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
                                placeholder="Search Class"
                                onInput={updateStudentResult}
                                onFocus={highlightText}
                            />
                        </div>
                        <div class="searchResult">
                            <ul>
                                {
                                studentResult.map((currStudent) => (
                                    <li>
                                    <button onClick={recordStudent}>{currStudent}</button>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="confirmation">

                </div>
            </div>
        </>
    )
}