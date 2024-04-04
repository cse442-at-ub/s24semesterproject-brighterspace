import React from 'react'
import {useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react'

const ChangeSidebar = ({children}) => {
    const location = useLocation();
    const [showsidebar,setshowsidebar] = useState(false)

    useEffect(()=> {
        console.log("this is location",location)
        if(location.pathname == '/login'){
            setshowsidebar(false)

        }

        else if(location.pathname == '/student-login'){
            setshowsidebar(false)

        }
        else if(location.pathname == '/admin-login'){
            setshowsidebar(false)

        }
        else{
            setshowsidebar(true)
        }

    },[location])
    return (
        <div>{showsidebar && children}</div>
    )
}
export default ChangeSidebar
