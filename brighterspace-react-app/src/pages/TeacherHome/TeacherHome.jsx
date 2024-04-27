import "./TeacherHome.css"
import TeacherAddClass from "../../components/TeacherAddClass/TeacherAddClass"
import TeacherEnrollStudent from "../../components/TeacherEnrollStudent/TeacherEnrollStudent"
import Tabs from "../../components/Tabs/Tabs"
import NotTeacher from "../../components/NotTeacher"
import { useState } from "react"
import TeacherTabClass from "../../components/TeacherTabClass/TeacherTabClass"
import TeacherUploadRec from "../../components/TeacherUploadRec/TeacherUploadRec";



function Render () {

    const [activeTab, setActiveTab] = useState("classrooms"); // for tabs
    const page = "TeacherHome"


    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "classrooms" && <TeacherTabClass />}
            {activeTab === "addclass" && <TeacherAddClass />}
            {activeTab === "enrollstudents" && <TeacherEnrollStudent />}
            {activeTab === "recording" && <TeacherUploadRec />}
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