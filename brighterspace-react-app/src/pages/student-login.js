import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as events from "events";

const StudentLogin = (props) => {

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(inputs)
        const requestHeader = {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        }
        await fetch('https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/adminLoginIn.php', requestHeader)
            .then(r => r.text())
            .then(data => {
                let split = data.split(',')
                if (split[0].includes("True")){
                    window.location.href = 'https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/brighterspace-react-app/build/student-home'
                }
            })



    }
    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'}/>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="10">
                        <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>password: </label>
                            </th>
                            <td>
                                <input type="text" name="pasword" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin