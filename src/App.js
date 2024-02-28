import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import StudentLogin from './student-login'
import AdminLogin from './admin-login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/student-login" element={<StudentLogin  />} />
          <Route path="/admin-login" element={<AdminLogin  />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App