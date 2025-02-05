import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    
    &:hover {
        background: #252831;
        border-left: 4px solid #4ced78;
        cursor: pointer;
    }
    
`

const SidebarLabel = styled.span`
    margin-left: 16px;
    
`;

const DropDownLink = styled(Link)`
    background: radial-gradient(circle at 10% 20%, rgb(85, 149, 27) 0.1%, rgb(183, 219, 87) 90%);
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    
    &:hover {
        background: #4ced78;
        cursor: pointer;
    }
`

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}

                </div>

            </SidebarLink>
            {subnav && item.subNav.map((item,index) => {
                return(
                    <DropDownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropDownLink>
                )
                })}
        </>
    )

}

export default SubMenu