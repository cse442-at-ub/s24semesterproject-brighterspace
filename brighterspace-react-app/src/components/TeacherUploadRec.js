import React, { useEffect, useState } from 'react';

export default function TeacherUploadRec() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");

    const [titleError, setTitleError] = useState("");
    const [videoError, setVideoError] = useState("");
    const [classroomError, setClassroomError] = useState("");

    const [classroomList, setClassroomList] = useState(["IvalidUser abcdefghijklmnopqrstuvwxyz"]);
    const [selectedClassroom, setSelectedClassroom] = useState("");

    const load = () => {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/classNames.php")
        .then(response => response.json())
        .then(arrayOfClassrooms => {
            console.log("Array of Classrooms:" + arrayOfClassrooms);
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

    const handleSubmission = () => {
        console.log("trying to submit:", selectedTitle, selectedFile);

        //validate
        const isVideoValid = validateVideo();
        const isTitleValid = validateTitle();
        const isClassroomValid = validateClassroom();
        if(!isVideoValid || !isTitleValid || !isClassroomValid){
            return;
        }

        //fetching
        fetchPostVideo(selectedFile);
        fetchPostClass(selectedClassroom);
        console.log(selectedFile);
        console.log(selectedTitle);

        setTitleError("");
        setVideoError("");
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2>Title:</h2>
            <input id="title" type="text" value={selectedTitle} onChange={handleTitleChange}/>
            <p>{titleError}</p>
            <br></br>
            <h2>Classroom:</h2>
            <select value={selectedClassroom} onChange={handleClassSelect} isSearchable={true}>
                <option value="">Select a classroom</option>
                {classroomList.map(classroom => (
                    <option key={classroom} value={classroom}>{classroom}</option>
                ))}
            </select>
            <p>{classroomError}</p>
            <br></br>
            <h2>Video:</h2>
            <input type="file" accept="video/mp4" onChange={handleVideoFile}/>
            <p>{videoError}</p>
            <button onClick={handleSubmission}>Upload Video</button>
        </div>
    )

}