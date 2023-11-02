import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout_cntr">
      <Outlet />
    </div>
  );
}

export default Layout;
