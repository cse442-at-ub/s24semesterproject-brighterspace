import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SideBarLink = styled(Link)`
    display: flex;
    color: #ffff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    
    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`

const SideBarLabel = styled.span`
    margin-left: 16px;
    
`

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    
    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`

const SubNavBarMenu = ({ item } ) => {
    const [subnav, setSubNav] = useState(false)
    const showSubnav = () => setSubNav(!subnav)
    return(
        <>
            <SideBarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SideBarLabel>
                        {item.title}
                    </SideBarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>

            </SideBarLink>
            {subnav && item.subNav.map((item,index)=> {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SideBarLabel>{item.title}</SideBarLabel>
                    </DropdownLink>
                )
                })}
        </>
    )

}

export default SubNavBarMenu