import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/LoginPage/login'
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
import Profile from './pages/ProfileSetting/ProfileSetting'
import Settings from './pages/UserSetting/settings'

import DiscussionBoard from "./pages/DiscussionBoard/DiscussionBoard";
import LandingPage from "./pages/LandingPage/LandingPage.js"
import AddGrade from "./pages/add-grade";
import NewAssignment from "./pages/new-assignment";
import Grades from "./pages/Grades/grades";
import Recordings from "./components/StudentRecording/StudentRecording"

import TeacherRoute from './TeacherRoute';
import StudentRoute from './StudentRoute';
import AccessDenied from './pages/AccessDenied';
import ProtectedRoute from './ProtectedRoute';

import StudentClass from "./components/StudentTabClass/StudentTabClass"
import TeacherAddClass from "./components/TeacherAddClass/TeacherAddClass"
import TeacherTabClass from "./components/TeacherTabClass/TeacherTabClass";
import TeacherEnrollStudent from "./components/TeacherEnrollStudent/TeacherEnrollStudent";
import TeacherUploadRec from "./components/TeacherUploadRec/TeacherUploadRec";





function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <ChangeSidebar>
          <Sidebar/>
          </ChangeSidebar>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login  />} />
            <Route path="/access-denied" element={<AccessDenied />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/student-login" element={<StudentLogin  />} />
              <Route path="/admin-login" element={<AdminLogin  />} />
              <Route path="/class/:classId" element={<StudentClassPage  />} />
              <Route path="/classroom/:classId" element={<TeacherClassPage  />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/overview" element={<Overview/>} />
              <Route path="/classes" element={<StudentClass/>} />
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
              <Route path="/classes/recordings" element={<Recordings/>}/>
              <Route path="/classes/grades" element={<Grades/>}/>
              <Route path="/addgrade" element={<AddGrade/>}/>
              <Route path="/teacher" element={<TeacherTabClass/>}/>
              <Route path="/teacher/add" element={<TeacherAddClass/>}/>
              <Route path="/teacher/enroll" element={<TeacherEnrollStudent/>}/>
              <Route path="/teacher/record" element={<TeacherUploadRec/>}/>
            </Route>

            <Route element={<TeacherRoute/>}>
              <Route path="/teacher-home" element={<TeacherHome />} />
            </Route>
  
            <Route element={<StudentRoute/>}>
              <Route path="/student-home" element={<StudentHome />} />
            </Route>

          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
