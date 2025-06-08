import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Guidelines from './pages/Guidelines';

const NgFirstRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/guidelines" element={<MainLayout><Guidelines /></MainLayout>} />
      <Route path="/cbpp/*" element={<Navigate to="/cbpp" replace />} />
      <Route path="/hmpp" element={<MainLayout><div>HMPP Platform (Coming Soon)</div></MainLayout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default NgFirstRoutes; 