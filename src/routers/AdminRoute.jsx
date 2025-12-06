import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const expiresAt = localStorage.getItem('tokenExpiresAt');

  // Không có token
  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  // Có token nhưng đã hết hạn
  if (expiresAt && Date.now() > Number(expiresAt)) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiresAt');
    alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
    return <Navigate to="/admin" replace />;
  }

  // Token còn hạn → cho qua
  return children ? children : <Outlet />;
};

export default AdminRoute;