import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/register.css'

const Register = (props) => {

    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    const onButtonClick = () => {
        setPasswordError('')

        const name_input = document.getElementById("fullName");
        const uname_input = document.getElementById("username");
        const email_input = document.getElementById("email");
        const pass_input = document.getElementById("password");
        const cpass_input = document.getElementById("cpassword")

        const name = name_input.value;
        const email = email_input.value;
        const username = uname_input.value;
        const pass = pass_input.value;
        const cpass = cpass_input.value;

        if('' === name || '' === username || '' === email || '' === pass || '' === cpass){
            setPasswordError('Complete all fields')
        }
        else if(cpass_input.value !== pass_input.value){
            setPasswordError('Passwords must match');
        }
        else {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                }
            }
            const creatAssignJSON = {"name": name,
                "username": username,
                "email": email,
                "password": pass};
            //request.open("POST", "http://localhost:3000/PHPBackEnd/functionLoginIn.php");
            request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/functionSignUp.php");
            request.send(JSON.stringify(creatAssignJSON));
        }

    }

    return (
        <div className={'RmainContainer'}>
            <div className={'RtitleContainer'}>
                <div>Register your Account</div>
            </div>
            <div className={'RinputContainer'}>
                <input
                    placeholder="full name"
                    type="text"
                    id="fullName"
                />
            </div>
            <div className={'RinputContainer'}>
                <input
                    placeholder="username"
                    type="text"
                    id="username"
                />
            </div>

            <div className={'RinputContainer'}>
                <input
                    placeholder="email"
                    type="text"
                    id="email"
                />
            </div>
            <div className={'RinputContainer'}>
                <input
                    placeholder="password"
                    type="password"
                    id="password"
                />
            </div>
            <div className={'RinputContainer'}>
                <input
                    placeholder="confirm password"
                    type="password"
                    id="cpassword"
                />
            </div>
            <label className="RerrorLabel">{passwordError}</label>
            <div className={'RinputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create account'}/>
            </div>
        </div>
    )
}

export default Register
