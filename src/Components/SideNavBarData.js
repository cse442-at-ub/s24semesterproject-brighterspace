import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideNavBarData = [
    {
        title: 'Dashboard',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Classes',
                path: '/overview/classes',
                icon: <IoIcons.IoIosPaper />,
            }

        ]
    },

    {
        title: 'Classes',
        path: '/classes',
        icon: <FaIcons.FaBookOpen />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'YourClass1',
                path: '/classes/YourClass1',
                icon: <FaIcons.FaBook />,
            },
            {
                title: 'YourClass2',
                path: '/classes/YourClass2',
                icon: <FaIcons.FaBook />,
            },
            {
                title: 'YourClass3',
                path: '/classes/YourClass3',
                icon: <FaIcons.FaBook />,
            },
        ]
    },

    {
        title: 'Calendar',
        path: '/calendar',
        icon: <FaIcons.FaCalendar />,
    }

]