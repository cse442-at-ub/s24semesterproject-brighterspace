import "./TeacherUploadRec.css"
import React, { useEffect, useRef, useState } from 'react';

export default function TeacherUploadRec() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");

    const [titleError, setTitleError] = useState("");
    const [videoError, setVideoError] = useState("");
    const [classroomError, setClassroomError] = useState("");

    const [classroomSearch, setClassroomSearch] = useState("");
    const [classroomIsOpen, setClassroomIsOpen] = useState(false);
    const [classroomList, setClassroomList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz"]);
    const [selectedClassroom, setSelectedClassroom] = useState("");

    const inputRef = useRef(null);

    const load = () => {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/classNames.php")
        .then(response => response.json())
        .then(arrayOfClassrooms => {
            setClassroomList(arrayOfClassrooms);
        })
        .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        load();
    },[]);

    const fetchPostClass = (string) => {
        fetch("https://example.php?data=class", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stringData: string })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error("problem sending class", error);
        });
    }

    const fetchPostVideo = (video) => {
        const formData = new FormData();
        formData.append('video', video);

        fetch("https://example.php?data=video", {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error("problem sending video", error);
        });
    }

    const handleVideoFile = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if(file){
            setVideoError("");
        }
    }

    const handleTitleChange = (event) => {
        const title = event.target.value;
        setSelectedTitle(title);
        if(title !== "" && /^[a-zA-Z0-9 !@#$%^&*()\-_+={[}\]|:;"'<>,.?/\\]*$/.test(title)){
            setTitleError("");
        }
    }

    const handleClassroomChange = (event) => {
        const searchValue = event.target.value;
        setClassroomSearch(searchValue);
        setSelectedClassroom("");
    }

    const handleClassroomInputClick = (event) => {
        if(!classroomIsOpen){
            setTimeout(() => {
                setClassroomIsOpen(true);
                event.target.select();
            }, 10);
        }
    }

    const handleClassroomClick = (input) => {
        const classroomValue = input;
        setSelectedClassroom(classroomValue);
        document.getElementById("searchClassroomInput").value = classroomValue;
        setClassroomIsOpen(false);
    }

    const validateTitle = () => {
        if(selectedTitle !== "" && /^[a-zA-Z0-9 !@#$%^&*()\-_+={[}\]|:;"'<>,.?/\\]*$/.test(selectedTitle)){
            setTitleError("");
            return true;
        }else if(selectedTitle !== ""){
            setTitleError("Title contains disallowed characters");
            return false;
        }else{
            setTitleError("Please enter a title for the video");
            return false;
        }
    }

    const validateVideo = () => {
        if(selectedFile){
            setVideoError("");
            return true;
        }
        else{
            setVideoError("Please select a video");
            return false;
        }
    }

    const validateClassroom = () => {
        if(classroomList.includes(selectedClassroom)){
            setClassroomError("");
            return true;
        }
        else{
            setClassroomError("Please select a valid classroom");
            return false;
        }
    }

    const handleSubmission = () => {
        console.log("trying to submit:", selectedTitle, "AND", selectedFile, "AND", selectedClassroom);

        //validate
        const isVideoValid = validateVideo();
        const isTitleValid = validateTitle();
        const isClassroomValid = validateClassroom();
        if(!isVideoValid || !isTitleValid || !isClassroomValid){
            return;
        }
        console.log("Valid inputs, proceeding...");

        //fetching
        // fetchPostVideo(selectedFile);
        // fetchPostClass(selectedClassroom);

        //clearing error messages
        setTitleError("");
        setVideoError("");
        setClassroomError("");

        //clearing selected video
        setSelectedFile(null);
        const input = inputRef.current;
        if (input) {
            input.value = null;
        }
    }

    return (
        <>
            <div class="core-TeacherUploadRec">
                <h2>Title:</h2>
                <input id="title" type="text" value={selectedTitle} onChange={handleTitleChange}/>
                <p>{titleError}</p>
                <br></br>
                <h2>Classroom:</h2>
                <input
                    type="text"
                    id="searchClassroomInput"
                    autocomplete="off"
                    onChange={handleClassroomChange}
                    onClick={handleClassroomInputClick}
                    onBlur={() => setTimeout(() => setClassroomIsOpen(false), 200)}
                    placeholder="Search classrooms"
                />
                {classroomIsOpen && classroomList.filter((option) => option.toLowerCase().includes(classroomSearch.toLowerCase())).length > 0 && (
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
                <p>{classroomError}</p>
                <br></br>
                <h2>Video:</h2>
                <input ref={inputRef} type="file" accept="video/mp4" onChange={handleVideoFile}/>
                <p>{videoError}</p>
                <br></br>
                <button onClick={handleSubmission}>Upload Video</button>
            </div>
        </>
    )

}