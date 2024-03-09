import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import StudentLogin from './pages/student-login'
import AdminLogin from './pages/admin-login'
import StudentHome from './pages/StudentHome'
import './App.css'
import TeacherHome from './pages/TeacherHome'
import StudentClassPage from './pages/StudentClassPage'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/student-login" element={<StudentLogin  />} />
            <Route path="/admin-login" element={<AdminLogin  />} />
            <Route path="/student-home" element={<StudentHome  />} />
            <Route path="/teacher-home" element={<TeacherHome  />} />
            <Route path="/class/:classId" element={<StudentClassPage  />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App