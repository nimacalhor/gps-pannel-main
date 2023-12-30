import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
    return (
        <div className="grid grid-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full flex-wrap">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="lg:flex flex-row gap-4 w-full flex-wrap">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}
