import React, { useEffect, useState } from 'react';

export default function Profile() {
    const [profilePicture, setProfilePicture] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("Hello");

    const fetchPicture = () => {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/profilePage.php?data=profile_picture", {
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
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/profilePage.php?data=bio", {
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
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/profilePage.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `bio=${encodeURIComponent(newBio)}`
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
            fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/profilePage.php", {
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