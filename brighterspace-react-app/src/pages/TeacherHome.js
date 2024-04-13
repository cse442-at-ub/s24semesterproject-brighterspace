import TeacherAddClass from "../components/TeacherAddClass"
import TeacherEnrollStudent from "../components/TeacherEnrollStudent"
import Tabs from "../components/Tabs"
import NotTeacher from "../components/NotTeacher"
import { useState } from "react"
import TeacherTabClass from "../components/TeacherTabClass"


function Render () {

    const [activeTab, setActiveTab] = useState("classrooms"); // for tabs
    const page = "TeacherHome"


    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "classrooms" && <TeacherTabClass />}
            {activeTab === "addclass" && <TeacherAddClass />}
            {activeTab === "enrollstudents" && <TeacherEnrollStudent />}
        </>
    )
}

export default function TeacherHome () {
    const [isValid, setIsValid] = useState(true);//fetch if authorized

    //fetch if authorized
    const cookies = document.cookie;
    console.log(cookies);

    return(
        <>
            {isValid ? <Render /> : <NotTeacher />}
        </>
    )
}