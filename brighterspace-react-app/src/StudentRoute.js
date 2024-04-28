import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const StudentRoute = () => {
    const [role, setRole] = useState('guest');
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:8000/AuthTest.php", {
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
        case 'teacher':
            return <Navigate to='/access-denied'/>;
        case 'student':
            return <Outlet/>;
        default:
            return <Navigate to='/login'/>;
    }
}

export default StudentRoute;