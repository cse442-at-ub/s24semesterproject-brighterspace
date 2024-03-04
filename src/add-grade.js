import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const AddGrade = (props) => {
    const [classes, setClasses] = useState('')
    const [assignment_name, setassignment_name] = useState('')
    const [student, set] = useState('')
    const [score, setScore] = useState('')

  const navigate = useNavigate()
   const goHome = () => {
        navigate('/')
    }
  const onButtonClick = () => {

  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Add Grade</div>
      </div>

        <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={goHome} value={'Home'} />
      </div>
      <br />
        <div>
            <label htmlFor="classes">Choose Class: </label>
            <select name="classes" id="classes">
                <option value="cse312">CSE 312</option>
                <option value="cse442">CSE 442</option>
                <option value="eas360">EAS 360</option>
            </select>
        </div>
        <br/>
        <div>
            <label htmlFor="assignments">Choose Assignment:  </label>
            <select name="assign" id="assign">
                <option value="hw1">HW 1</option>
                <option value="hw2">HW 2</option>
                <option value="hw3">HW 3</option>
            </select>
        </div>
        <br/>
        <div>
            <label htmlFor="student">Choose Student: </label>
            <select name="student" id="student">
                <option value="John">John</option>
                <option value="Joe">Joe</option>
                <option value="Jack">Jack</option>
            </select>
        </div>
        <br/>
      <div className={'inputContainer'}>
        <input
          placeholder="Students's Score"
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create'} />
      </div>
    </div>
  )
}

export default AddGrade