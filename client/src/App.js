import React from 'react';
import { Routes, Route } from "react-router-dom";
import List from './pages/List';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </>
  );
}

export default App;
