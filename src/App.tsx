import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { FamilyList } from './pages/FamilyList';
import { FamilyRegistration } from './pages/FamilyRegistration';
import { FamilyDetail } from './pages/FamilyDetail';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('cativeiro_auth') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('cativeiro_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cativeiro_auth');
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <AppLayout onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/families" element={<FamilyList />} />
          <Route path="/families/new" element={<FamilyRegistration />} />
          <Route path="/families/:id" element={<FamilyDetail />} />
          <Route path="/families/edit/:id" element={<FamilyRegistration />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
