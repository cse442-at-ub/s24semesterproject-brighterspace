import React, { useEffect, useState } from 'react';

export default function FileUpload() {
    const [profilePicture, setProfilePicture] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("Hello");

    const fetchPicture = () => {
        fetch("http://localhost:8000/profilePictureTest.php", {
            method: "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            setProfilePicture(imageUrl);
        })
        .catch(error => {
            console.error('Error fetching profile picture:', error);
        });
    }

    const fetchBio = () => {
        fetch("http://localhost:8000/profilePictureTest.php?data=bio", {
            method: "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            setBio(data);
        })
        .catch(error => {
            console.error('Error fetching bio:', error);
        });
    }

    useEffect(() => {
        fetchPicture();
        fetchBio();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleInputChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
        console.log("Your bio was changed to:", newBio);
        fetch("http://localhost:8000/profilePictureTest.php", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: newBio
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        // .then(data => {
        //     console.log(data);
        // })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    };

    const handleUpdate = () => {
        if(selectedFile){
            
            //Fetch POST the selectedFile
            const formData = new FormData();
            formData.append('file', selectedFile);
            fetch("http://localhost:8000/profilePictureTest.php", {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                fetchPicture();
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });

            console.log('Selected file:', selectedFile);
        }else{
            console.log('No file selected');
        }
    };

    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2>PROFILE PICTURE</h2>
            <img src={profilePicture} alt="ProfilePicture" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <input type="file" accept="image/jpeg" onChange={handleFileChange}/>
            <button onClick={handleUpdate}>Update Picture</button>
            <br></br>
            <h2>ABOUT ME</h2>
            <input type="text" value={bio} onChange={handleInputChange}/>
        </div>
    );
}