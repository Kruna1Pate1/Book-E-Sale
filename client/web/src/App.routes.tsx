import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Login, Register} from './pages';
import Logout from './pages/logout/Logout';

const AppRoutes = ():JSX.Element => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" />
    </Routes>
  );
};

export default AppRoutes;
