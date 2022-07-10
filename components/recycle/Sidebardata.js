import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import * as FaIcons from 'react-icons/fa'

export const Sidebardata = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome fontSize={21}/>,
        ref: 'home',
    },
    {
        title: 'Discover',
        path: '/Discover',
        icon: <GoIcons.GoTelescope fontSize={21}/>,
        ref: 'discover',
    },
    {
        title: 'Wishlist',
        path: '/Wishlist',
        icon: <BsIcons.BsBookmarkHeartFill fontSize={21}/>,
        ref: 'wishlist',
    },
    {
        title: 'Portfolio',
        path: '/Portfolio',
        icon: <GiIcons.GiPieChart fontSize={21}/>,
        ref: 'portfolio',
    },
    {
        title: 'Insights',
        path: '/Insights',
        icon: <FaIcons.FaChartArea fontSize={21}/>,
        ref: 'insights',
    },
]