import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import StudentLogin from './pages/student-login'
import AdminLogin from './pages/admin-login'
import StudentHome from './pages/StudentHome/StudentHome'
import './App.css'
import TeacherHome from './pages/TeacherHome/TeacherHome'
import StudentClassPage from './pages/StudentClassPage/StudentClassPage'
import TeacherClassPage from './pages/TeacherClassPage/TeacherClassPage'
import Sidebar from "./components/Sidebar";
import Overview from './pages/Overview'
import {Classes, ClassOne, ClassTwo, ClassThree} from './pages/Classes'
import Calendar from './pages/Calendar'
import TaskManager from "./pages/TaskManager/TaskManager";
import Register from "./pages/register";
import ChangeSidebar from "./components/ChangeSidebar";
import SupportPage from "./pages/SupportPage/SupportPage"
import Profile from './pages/ProfileSetting'
import Settings from './pages/settings'

import DiscussionBoard from "./pages/DiscussionBoard";
import LandingPage from "./pages/LandingPage/LandingPage.js"
import AddGrade from "./pages/add-grade";
import NewAssignment from "./pages/new-assignment";
import Grades from "./pages/grades";



function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <ChangeSidebar>
          <Sidebar/>
          </ChangeSidebar>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login  />} />
            <Route path="/student-login" element={<StudentLogin  />} />
            <Route path="/admin-login" element={<AdminLogin  />} />
            <Route path="/student-home" element={<StudentHome  />} />
            <Route path="/teacher-home" element={<TeacherHome  />} />
            <Route path="/class/:classId" element={<StudentClassPage  />} />
            <Route path="/classroom/:classId" element={<TeacherClassPage  />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/classes/class1" element={<ClassOne/>} />
            <Route path="/classes/class2" element={<ClassTwo/>} />
            <Route path="/classes/class3" element={<ClassThree/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/task-manager" element={<TaskManager/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/support" element={<SupportPage/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/add-grade" element={<AddGrade/>}/>
            <Route path="/new-assignment" element={<NewAssignment/>}/>

            <Route path="/discussions" element={<DiscussionBoard/>}/>
            <Route path="/landing" element={<LandingPage/>}/>
            <Route path="/add-grade" element={<AddGrade/>}/>
            <Route path="/new-assignment" element={<NewAssignment/>}/>
            <Route path="/grades" element={<Grades/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
