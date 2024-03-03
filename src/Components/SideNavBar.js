import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SideNavBarData} from './SideNavBarData'
import SubNavBarMenu from "./SubNavBarMenu";
import {IconContext} from 'react-icons/lib'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SideBarNav = styled.nav`
    background: #15171c;
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

const SideBarWrap = styled.div`
    width: 100%;
`

const SideNavBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const ShowSideBar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={ShowSideBar}/>

                </NavIcon>
            </Nav>
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={ShowSideBar} />

                    </NavIcon>
                    {SideNavBarData.map((item,index)=>{
                        return <SubNavBarMenu item={item} key={index}/>

                    })}

                </SideBarWrap>
            </SideBarNav>
            </IconContext.Provider>
        </>
    )
}
export default SideNavBar
