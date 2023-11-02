import React from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className="DetailUser_navbar"
      onClick={() => navigate(-1)}
    >
      <TbArrowLeft />
      <p>Back to List</p>
    </div>
  );
}

export default Navbar;
