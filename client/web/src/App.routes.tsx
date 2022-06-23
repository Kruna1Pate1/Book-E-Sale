import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Register } from './pages';
import { BookList } from './pages/book-list';
import Logout from './pages/logout/Logout';
import { Profile } from './pages/profile';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="logout" element={<Logout />} />
      <Route path="booklist" element={<BookList />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default AppRoutes;
