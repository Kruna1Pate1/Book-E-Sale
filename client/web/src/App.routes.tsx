import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Login, Register} from './pages';

const AppRoutes = ():JSX.Element => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" />
    </Routes>
  );
};

export default AppRoutes;
