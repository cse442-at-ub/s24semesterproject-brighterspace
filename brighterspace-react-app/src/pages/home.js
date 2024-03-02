import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate('/login')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value="Login"
        />
      </div>
    </div>
  )
}

export default Home