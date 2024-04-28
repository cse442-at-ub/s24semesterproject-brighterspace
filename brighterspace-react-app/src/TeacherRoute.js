import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const TeacherRoute = () => {
    const [role, setRole] = useState('guest');
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        fetch("https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/AuthTest.php", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log("role:", data.role);
            setRole(data.role);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error:", error);
            setLoading(false);
        });
    }, [location]);

    // Render based on the fetched role
    if (loading) {
        return <div>Loading...</div>;
    }

    switch (role) {
        case 'student':
            return <Navigate to='/access-denied'/>;
        case 'teacher':
            return <Outlet/>;
        default:
            return <Navigate to='/login'/>;
    }
}

export default TeacherRoute;
