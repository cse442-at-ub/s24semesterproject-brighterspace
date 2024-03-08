import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import StudentLogin from './pages/student-login'
import AdminLogin from './pages/admin-login'
import StudentHome from './pages/StudentHome'
import './App.css'
import TeacherHome from './pages/TeacherHome'
import ExampleClassPage from './pages/ExampleClassPage'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/student-login" element={<StudentLogin  />} />
            <Route path="/admin-login" element={<AdminLogin  />} />
            <Route path="/student-home" element={<StudentHome  />} />
            <Route path="/teacher-home" element={<TeacherHome  />} />
            <Route path="/class/:classId" element={<ExampleClassPage  />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App