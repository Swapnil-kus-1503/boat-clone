import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Componets/PrivateRoute";
import Cart from "./Cart";
import Checkout from "./Checkout";
import DailyDeals from "./DailyDeals";
import Home from "./Home";
import Login from "./Login";
import More from "./More";
import OfferZone from "./OfferZone";
import Payment from "./Payment";
import Shop from "./Shop";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dailydeals" element={<DailyDeals />} />
        <Route path="/offerzone" element={<OfferZone />} />
        <Route path="/more" element={<More />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
