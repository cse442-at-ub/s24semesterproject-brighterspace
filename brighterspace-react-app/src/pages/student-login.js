import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentLogin = (props) => {


  const navigate = useNavigate()
   const goHome = () => {
        navigate('/')
    }
  const onButtonClick = () => {
    navigate('/student-home') //I(Brandon) edited this line so I can access my page
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
        <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={goHome} value={'Home'} />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your email here"
          className={'inputBox'}
        />

      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your password here"
          className={'inputBox'}
        />

      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default StudentLogin