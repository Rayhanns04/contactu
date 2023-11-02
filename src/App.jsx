import React from 'react';
import './sass/main.scss';
import 'antd/dist/reset.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Home from './pages/home';
import Middleware from './components/middleware';
import DetailUser from './pages/detail-user';
import NoMatchPage from './pages/no-match-page';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/users">
        <Route
          index
          element={
            <Middleware>
              <Home />
            </Middleware>
          }
        />
        <Route
          index
          path=":id"
          element={
            <Middleware>
              <DetailUser />
            </Middleware>
          }
        />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}

export default App;
