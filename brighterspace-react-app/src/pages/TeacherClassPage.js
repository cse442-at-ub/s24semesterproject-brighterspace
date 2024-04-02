import { useParams } from "react-router-dom";
import NotStudent from "../components/NotStudent";
import { useState } from "react";
import Tabs from "../components/Tabs";
import { useEffect } from "react";

function Render() {
    const {classId} = useParams()
    const [activeTab, setActiveTab] = useState("classes"); // for tabs
    const page = "TeacherClassPage"

    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "syllabus" && <><h1>syllabus</h1></>}
            <h1>Teacher view for classroom: {classId}</h1>
        </>
    )
}


export default function StudentClassPage() {
    const [isValid, setIsValid] = useState(true);//fetch if authorized

    //fetch if authorized

    const {classId} = useParams()

    useEffect(() => {
        // Fetch authorization status
        if (classId === "MTH241") {
            setIsValid(false);
        }
        // Fetch class data
    }, [classId]);
    //Fetch class data
    //Render class page with fetched data

    return(
        <>
            {isValid ? <Render /> : <NotStudent />}
        </>
    );
}