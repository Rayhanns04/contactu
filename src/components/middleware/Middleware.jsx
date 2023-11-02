import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUserStore } from '../../store/useUserStore';

function Middleware({ children }) {
  const token = useUserStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

Middleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Middleware;
