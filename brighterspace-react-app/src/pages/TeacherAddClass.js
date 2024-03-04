import ClassSelection from "../components/ClassSelection";
import NotTeacher from "../components/NotTeacher";

const isTeacher = true; //ig php will give this

export default function TeacherAddClass() {
    return(
        <>
            {isTeacher ? <ClassSelection /> : <NotTeacher />}
        </>
    )
}