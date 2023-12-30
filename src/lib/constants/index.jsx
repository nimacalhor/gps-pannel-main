import { HiOutlineViewGrid, HiOutlineCube, HiOutlineUsers, HiOutlineAnnotation, HiOutlineCog } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'داشبورد',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'محصولات',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'customers',
        label: 'مشتریان',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'messages',
        label: 'نظرات',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'تنظیمات',
        path: '/settings',
        icon: <HiOutlineCog />
    }
]
