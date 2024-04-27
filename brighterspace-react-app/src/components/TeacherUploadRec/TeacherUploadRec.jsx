import "./TeacherUploadRec.css"
import React, { useEffect, useRef, useState } from 'react';

export default function TeacherUploadRec() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");

    const [titleError, setTitleError] = useState("");
    const [videoError, setVideoError] = useState("");
    const [classroomError, setClassroomError] = useState("");

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

    const fetchPost = (video, classroom, title) => {
        const formData = new FormData();
        formData.append('video', video);
        //your form data append with those 2 new paramenters
        formData.append('classroom', classroom);
        formData.append('title', title);

        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/videoUpload.php?data=video", {
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
            console.error("problem sending video post", error);
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

    const handleClassSelect = (event) => {
        const classroom = event.target.value;
        setSelectedClassroom(classroom);
        if(classroomList.includes(classroom)){
            setClassroomError("");
        }
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
        fetchPost(selectedFile, selectedClassroom, selectedTitle);

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
        setSelectedClassroom("");
        setSelectedTitle("");
    }

    return (
        <>
            <div class="core-TeacherUploadRec">
                <h2>Title:</h2>
                <input id="title" type="text" value={selectedTitle} onChange={handleTitleChange}/>
                <p>{titleError}</p>
                <br></br>
                <h2>Classroom:</h2>
                <select value={selectedClassroom} onChange={handleClassSelect} issearchable={true}>
                    <option class="option" value="">Select a classroom</option>
                    {classroomList.map(classroom => (
                        <option key={classroom} value={classroom}>{classroom}</option>
                    ))}
                </select>
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