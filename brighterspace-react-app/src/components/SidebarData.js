import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
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
        title: 'Classes',
        path: '/classes',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Class1',
                path: '/classes/class1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Class2',
                path: '/classes/class2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Class3',
                path: '/classes/class3',
                icon: <IoIcons.IoIosPaper />,
            },

        ]

    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Task Manager',
        path: '/task-manager',
        icon: <FaIcons.FaCartPlus />,
    }
]