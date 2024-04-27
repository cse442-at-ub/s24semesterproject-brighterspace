import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'
import {IconContext} from 'react-icons/lib'

const Nav = styled.div`
    background: linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%);
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
`

const SidebarNav = styled.nav`
    background: radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%);
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar)
    return (
        <>
            <IconContext.Provider value = {{ color: '#fff'}}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSideBar}/>

                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSideBar}/>

                    </NavIcon>
                    {SidebarData.map((item,index) => {
                        return <SubMenu item={item} key={index}/>
                    })}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </>
    )
}
export default Sidebar
