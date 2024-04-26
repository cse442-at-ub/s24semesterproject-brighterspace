import { useParams } from "react-router-dom";
import NotStudent from "../../components/NotStudent";
import { useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import { useEffect } from "react";
import TeacherUploadRec from "../../components/TeacherUploadRec/TeacherUploadRec";

function Render() {
    const {classId} = useParams()
    const [activeTab, setActiveTab] = useState("syllabus"); // for tabs
    const page = "TeacherClassPage"

    return(
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} page={page}/>
            {activeTab === "syllabus" && <><h1>syllabus</h1></>}
            {activeTab === "recording" && <TeacherUploadRec />}
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