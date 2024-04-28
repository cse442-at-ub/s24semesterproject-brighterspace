import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import * as CiIcons from 'react-icons/ci'
import * as CgIcons from 'react-icons/cg'
import * as GrIcons from 'react-icons/gr'
import { GiTeacher } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import {tunnelbear} from "../components/StudentTabClass/TunnelBear_35181.png"
import { RiBearSmileLine } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <RiBearSmileLine/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [

        ]

    },
    {
        title: 'Classes',
        path: '/classes',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Recordings',
                path: '/classes/recordings',
                icon: <FaVideo />,
            },
            {
                title: 'Grades',
                path: '/classes/grades',
                icon: <FaChalkboard />,
            },


        ]

    },
    {
        title: 'Task Manager',
        path: '/task-manager',
        icon: <FaIcons.FaTasks />,
    },
    {
        title: 'Discussion Board',
        path: '/discussions',
        icon: <IoIcons.IoMdChatbubbles/>

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
        title: 'Teacher Suite',
        path: '/teacher',
        icon: <GiTeacher />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Add Class',
                path: '/teacher/add',
                icon: <IoIosAddCircleOutline />,
            },
            {
                title: 'Enroll Student',
                path: '/teacher/enroll',
                icon: <IoMdPersonAdd />,
            },
            {
                title: 'Upload Video',
                path: '/teacher/record',
                icon: <FaVideo />,
            },


        ]

    },

    {
        title: 'Log Out',
        path: '/log-out',
        icon: <CiIcons.CiLogout/>
    }
]