import { useParams } from "react-router-dom";
import NotStudent from "../components/NotStudent";


var isStudent = true; //php will handle this

function Access() {
    const {classId} = useParams()

    return(
        <>
            <h1>Welcome to {classId}</h1>
        </>
    )
}


export default function ExampleClassPage() {
    const {classId} = useParams()

    if(classId === "CSE442"){
        isStudent = false;
    }
    //Fetch class data
    //Render class page with fetched data

    return(
        <>
            {isStudent ? <Access /> : <NotStudent />}
        </>
    );
}