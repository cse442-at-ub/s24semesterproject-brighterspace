import "../styles/StudentHome.css"
import StudentTabClass from "../components/StudentTabClass"
import Tabs from "../components/Tabs"
import NotStudent from "../components/NotStudent"
import { useState } from "react"

function Render () {

    const [activeTab, setActiveTab] = useState("classes"); // for tabs
    const page = "StudentHome"


    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "classes" && <StudentTabClass />}
            {activeTab === "allgrades" && <></>}
            {activeTab === "allassignments" && <></>}
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