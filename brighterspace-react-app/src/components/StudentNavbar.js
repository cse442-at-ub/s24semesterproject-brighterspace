import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function generateStudentInfo() {
    return (
        <>
            <li>
                studentName
            </li>
            <li>
                studentID
            </li>
        </>
    );
}

export default function StudentNavbar() {
    return(
        <nav class="navbar">
            <a href="student_home.php">{/*<img src="" alt="Logo" draggable="false">*/}</a>
            <ul>
                <li><Link to="/login">Signout</Link></li>
                {generateStudentInfo()}
            </ul>
        </nav>
    )
}