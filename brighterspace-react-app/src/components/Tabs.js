import "../styles/Tabs.css";

const name = "Brandon Chen";

function getName() {
    return (
        <>
            <p>
                {name}
            </p>
        </>
    );
}

export default function Tabs({ activeTab, setActiveTab, page }) {

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <nav class="tabs">
            <a>Logo</a>
            <div class="tabButtons">
                {page === "StudentHome" && (
                    <>
                        <button onClick={() => handleTabClick("classes")} className={activeTab === "classes" ? 'active' : ''}>Classes</button>
                        <button onClick={() => handleTabClick("allgrades")} className={activeTab === "allgrades" ? 'active' : ''}>Grades</button>
                        <button onClick={() => handleTabClick("allassignments")} className={activeTab === "allassignments" ? 'active' : ''}>Assignments</button>
                    </>
                )}
                {page === "TeacherHome" && (
                    <>
                        <button onClick={() => handleTabClick("addclass")} className={activeTab === "addclass" ? 'active' : ''}>Create Classroom</button>
                        <button onClick={() => handleTabClick("enrollstudents")} className={activeTab === "enrollstudents" ? 'active' : ''}>Enroll Students</button>
                    </>
                )}
                {page === "StudentClassPage" && (
                    <>
                        <button onClick={() => handleTabClick("grades")} className={activeTab === "grades" ? 'active' : ''}>Grades</button>
                        <button onClick={() => handleTabClick("assignments")} className={activeTab === "assignments" ? 'active' : ''}>Assignments</button>
                    </>
                )}
            </div>
            <div class="profile">
                {getName()}
            </div>
        </nav>
    )
}