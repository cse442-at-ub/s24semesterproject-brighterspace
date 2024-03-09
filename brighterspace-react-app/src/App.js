//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import StudentLogin from './pages/student-login'
import AdminLogin from './pages/admin-login'
import StudentHome from './pages/StudentHome'
import './App.css'
import TeacherAddClass from './pages/TeacherAddClass'
import ExampleClassPage from './pages/ExampleClassPage'
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Overview from './pages/Overview'
import {Classes, ClassOne, ClassTwo, ClassThree} from './pages/Classes'
import Calendar from './pages/Calendar'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/student-login" element={<StudentLogin  />} />
            <Route path="/admin-login" element={<AdminLogin  />} />
            <Route path="/student-home" element={<StudentHome  />} />
            <Route path="/teacher-home/add-class" element={<TeacherAddClass  />} />
            <Route path="/class/:classId" element={<ExampleClassPage  />} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/classes/class1" element={<ClassOne/>} />
            <Route path="/classes/class2" element={<ClassTwo/>} />
            <Route path="/classes/class3" element={<ClassThree/>} />
            <Route path="/calendar" element={<Calendar/>} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App