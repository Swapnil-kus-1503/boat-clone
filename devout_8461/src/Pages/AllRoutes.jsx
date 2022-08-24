import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DailyDeals from './DailyDeals'
import Home from './Home'
import More from './More'
import OfferZone from './OfferZone'
import Shop from './Shop'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/dailydeals" element={<DailyDeals/>} />
            <Route path="/offerzone" element={<OfferZone/>} />
            <Route path="/more" element={<More/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes