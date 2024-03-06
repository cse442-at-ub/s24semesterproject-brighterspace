import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const NewAssignment = (props) => {
    const [classes, setClasses] = useState('')
    const [assignment_name, setassignment_name] = useState('')
    const [max_points, setMax_points] = useState('')

  const navigate = useNavigate()
   const goHome = () => {
        navigate('/')
    }
  const onButtonClick = () => {

  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Create Assignment</div>
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
      <div className={'inputContainer'}>
        <input
          placeholder="Name of Assignment"
          className={'inputBox'}
        />

      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Max Points"
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

export default NewAssignment