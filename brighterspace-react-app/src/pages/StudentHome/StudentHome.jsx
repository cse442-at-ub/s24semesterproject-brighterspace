import "./StudentHome.css"
import StudentTabClass from "../../components/StudentTabClass/StudentTabClass"
import Tabs from "../../components/Tabs/Tabs"
import NotStudent from "../../components/NotStudent"
import { useState } from "react"
import StudentRecording from "../../components/StudentRecording/StudentRecording"

function Render () {

    const [activeTab, setActiveTab] = useState("classes"); // for tabs
    const page = "StudentHome"


    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "classes" && <StudentTabClass />}
            {activeTab === "allgrades" && <><h1>allgrades</h1></>}
            {activeTab === "allassignments" && <><h1>allassignments</h1></>}
            {activeTab === "recordings" && <StudentRecording />}
        </>
    )
}

export default function StudentHome () {
    const [isValid, setIsValid] = useState(true);//fetch if authorized

    //fetch if authorized

    return(
        <>
            {isValid ? <Render /> : <NotStudent />}
        </>
    )
}