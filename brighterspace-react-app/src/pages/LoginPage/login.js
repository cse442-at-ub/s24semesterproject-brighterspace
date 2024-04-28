import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

const Login = (props) => {
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const Loginf = () => {
        setPasswordError('')
        const username_input = document.getElementById("username");
        const password_input = document.getElementById("password");
        const username = username_input.value;
        const pass = password_input.value;
        if(username === '' || pass === ''){
            setPasswordError('Complete all fields')
        }
        else{
            const request = new XMLHttpRequest();
            var backendresponse = ""
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                    backendresponse = this.response
                    if(backendresponse === "False"){
                        setPasswordError('Incorrect username or password')
                    } else if(backendresponse === "True, Admin: 0") {
                        navigate('/classes')
                    } else if(backendresponse === "True, Admin: 1"){
                        navigate('/classes')
                    }
                }
            }
            const credentialsJSON = {"name": username, "pass": pass};
            //TODO update path for server
            request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/adminLoginIn.php");
            request.send(JSON.stringify(credentialsJSON));
        }
    }

    return (
        <div className="login-background-container">
        <div className={'LmainContainer'}>
            <div className={'LtitleContainer'}>
                <div>Welcome to Brighterspace</div>
            </div>
            <div className={'LinputContainer'}>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                />
            </div>
            <div className={'LinputContainer'}>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                />

            </div>
            <label className="LerrorLabel">{passwordError}</label>
            <div className={'LinputContainer'}>
                <input type="button" onClick={Loginf} value={'LOGIN'}/>
            </div>

        </div>
        </div>
    )
}

export default Login
