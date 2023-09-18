import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Room from "./pages/Room";
import Gallery from "./pages/Gallery";
import Specs from "./pages/Spec1";
import Spec from "./pages/Spec";
import Panel from "./dashboard/Panel";
import SpecPanel from "./dashboard/SpecPanel";
import Login from "./pages/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="bg-[#EEEEEE]">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  ana sayfa */}
        <Route path="/rooms" element={<Project />} /> {/* odalar sayfasi */}
        <Route path="/rooms/:id" element={<Room />} /> {/* tekli oda sayfasi */}
        <Route path="/specs" element={<Specs />} /> {/* ozellikler sayfasi */}
        <Route path="/specs/:id" element={<Spec />} />{" "}
        {/* tekli ozellikler sayfasi */}
        <Route path="/gallery" element={<Gallery />} /> {/* galeri */}
        {user ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/login" />} />
        )}
        {/* panel */}
        <Route path="/dashboard/rooms" element={<Panel />} />
        {/* panel odalar */}
        <Route path="/dashboard/specs" element={<SpecPanel />} />
        {/* panel ozellikler */}
        <Route path="/login" element={<Login />} />
        {/* login */}
      </Routes>
    </div>
  );
}

export default App;
