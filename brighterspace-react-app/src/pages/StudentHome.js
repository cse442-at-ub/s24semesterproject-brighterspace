import "../styles/StudentHome.css"
import Navbar from "../components/Navbar"

const classes = ["MTH241", "MTH306", "CSE442", "GLY105", "MTH411", "CSE341", "CSE331", "EAS360"];

function generateClassList() {
    return classes.map(currClass => (
        <li key={currClass}>
            <a href={`${currClass}.html`}>{currClass}</a>
        </li>
    ));
}

export default function StudentHome () {
    return(
        <>
            <Navbar />
            <div id="tabs" class="tabs">
                <ul>
                    <li><h2>Tabs</h2></li>
                    <li><h2>Schedule</h2></li>
                    <li><h2>Homework</h2></li>
                    <li><h2>Grades</h2></li>
                </ul>
                <div>
                    <button id="tabsbutton"></button>
                </div>
            </div>
            <div class="core">
                <div class="classes">
                    <ul>
                        {generateClassList()}
                    </ul>
                </div>
                <div class="reminders">
                    <ul>
                        <li><a>MTH 241 - Homework #7</a><a>*Description*</a></li>
                        <li><a>MTH 241 - Homework #8</a><a>*Description*</a></li>
                        <li><a>MTH 306 - Homework #10</a><a>*Description*</a></li>
                        <li><a>CSE 442 - Sprint #1</a><a>*Description*</a></li>
                        <li><a>GLY 105 - Nothing!</a><a>*Description*</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}