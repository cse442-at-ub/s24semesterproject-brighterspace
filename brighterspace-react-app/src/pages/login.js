import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {


  const navigate = useNavigate()

    const onStudentClick = () => {
      navigate('/student-login')
    }
    const onAdminClick = () => {
      navigate('/admin-login')
    }
    const goHome = () => {
        navigate('/')
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
        <input className={'inputButton'} type="button" onClick={onStudentClick} value={'Student'} />
      </div>
        <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onAdminClick} value={'Teacher'} />
      </div>
    </div>
  )
}

export default Login