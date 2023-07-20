import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <div>
        <Link to="/">Home</Link> | <Link to="/add">Add a Hat</Link>
      </div>
      <Outlet />
    </div>
  );
}

export { Layout };