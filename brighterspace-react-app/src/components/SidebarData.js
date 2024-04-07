import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import * as CiIcons from 'react-icons/ci'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <GrIcons.GrOverview />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Assessment',
                path: '/overview/assessment',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Overview',
                path: '/overview/profile',
                icon: <IoIcons.IoIosPaper />,
            },

        ]

    },
    {
        title: 'Home',
        path: '/student-home',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [


        ]

    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <FaIcons.FaCalendarAlt />,
    },
    {
        title: 'Task Manager',
        path: '/task-manager',
        icon: <FaIcons.FaTasks />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile/>

    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <CiIcons.CiSettings/>

    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiIcons.BiSupport/>

    },

    {
        title: 'Log Out',
        path: '/log-out',
        icon: <CiIcons.CiLogout/>
    }
]