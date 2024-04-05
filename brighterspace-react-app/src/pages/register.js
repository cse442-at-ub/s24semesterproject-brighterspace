import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

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
            request.open("POST", "http://localhost:3000/functionSignUp.php");
            request.send(JSON.stringify(creatAssignJSON));
        }

    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Register your Account</div>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'}/>
            </div>

            <br/>
            <div className={'inputContainer'}>
                <label>Name: </label>
                <input
                    placeholder="Enter your name"
                    type="text"
                    id="fullName"
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <label>Username: </label>
                <input
                    placeholder="Enter your desired username"
                    type="text"
                    id="username"
                />
            </div>

            <br/>
            <div className={'inputContainer'}>
                <label>Email: </label>
                <input
                    placeholder="Enter your email"
                    type="text"
                    id="email"
                />
            </div>

            <br/>
            <div className={'inputContainer'}>
                <label>Password: </label>
                <input
                    placeholder="Enter your password"
                    type="password"
                    id="password"
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <label>Confirm Password: </label>
                <input
                    placeholder="Confirm password"
                    type="password"
                    id="cpassword"
                />
            </div>
            <br/>
            <label className="errorLabel">{passwordError}</label>
            <br/>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create account'}/>
            </div>
        </div>
    )
}

export default Register

/*



 */
