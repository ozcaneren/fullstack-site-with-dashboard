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

  const ProtectedRoute = ({ element, ...rest }) => {
    if (user) {
      return <Route {...rest} element={element} />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div className="bg-[#EEEEEE]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Project />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/specs/:id" element={<Spec />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard/rooms"
          element={
            user ? (
              <Panel />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard/specs"
          element={
            user ? (
              <SpecPanel />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;