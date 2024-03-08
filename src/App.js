import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Overview from './pages/Overview'
import {Classes, ClassOne, ClassTwo, ClassThree} from './pages/Classes'
import Calendar from './pages/Calendar'

function App() {
  return (
    <Router>
      <Sidebar/>
        <Routes>
            <Route path="/overview" element={<Overview/>} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/classes/class1" element={<ClassOne/>} />
            <Route path="/classes/class2" element={<ClassTwo/>} />
            <Route path="/classes/class3" element={<ClassThree/>} />
            <Route path="/calendar" element={<Calendar/>} />
        </Routes>
    </Router>

  );
}

export default App;
