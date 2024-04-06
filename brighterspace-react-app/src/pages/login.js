import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

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
                        navigate('/student-home')
                    } else if(backendresponse === "True, Admin: 1"){
                        navigate('/teacher-home')
                    }
                }
            }
            const credentialsJSON = {"name": username, "pass": pass};
            //TODO update path for server
            request.open("POST", "http://localhost/s24semesterproject-brighterspace/PHPBackEnd/adminLoginIn.php");
            request.send(JSON.stringify(credentialsJSON));
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            {/* <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'}/>
            </div> */}
            <br/>
            <div className={'inputContainer'}>
                <input
                    type="text"
                    placeholder="Enter your username here"
                    id="username"
                />
            </div>
            <br/>
            <div className={'inputContainer'}>
                <input
                    type="password"
                    placeholder="Enter your password here"
                    id="password"
                />

            </div>
            <br/>
            <label className="errorLabel">{passwordError}</label>
            <br/>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={Loginf} value={'Log in'}/>
            </div>

        </div>
    )
}

export default Login
