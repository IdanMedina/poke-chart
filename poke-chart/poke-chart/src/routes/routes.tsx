import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import { HomeProvider } from "../providers/HomeContext";
import CardMain from "../components/CardMain";
import ChartMain from "../components/ChartMain";

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
        <Route path="/chart" element={<ChartMain />} />
        <Route path="/card" element={< CardMain/>} />
      </Route>
    </Routes>
  );
};
