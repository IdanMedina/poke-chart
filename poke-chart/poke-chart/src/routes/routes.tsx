import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import { HomeProvider } from "../providers/HomeContext";
import Chart from "../components/Main/Chart";
import Card from "../components/Main/Card";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeProvider>
            <Header />
          </HomeProvider>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/card" element={<Card />} />
      </Route>
    </Routes>
  );
};
