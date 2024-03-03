import './App.css';
import SideNavBar from "./Components/SideNavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './Pages/Overview';
import {Classes,Classes1,Classes2,Classes3} from './Pages/Classes';

function App() {
  return (
    <Router>
        <SideNavBar/>
        <Routes>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/classes/YourClass1' element={<Classes1/>}/>
            <Route path='/classes/YourClass2' element={<Classes2/>}/>
            <Route path='/classes/YourClass3' element={<Classes3/>}/>
        </Routes>
    </Router>
  );
}

export default App;
