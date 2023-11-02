import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';
import { useUserStore } from '../../../../store/useUserStore';

function Navbar() {
  const navigate = useNavigate();
  const signOut = useUserStore((state) => state.signOut);
  return (
    <div className="Home_navbar">
      <p>Home</p>

      <button
        type="button"
        className="Home_btn_delete"
        onClick={() => {
          signOut({
            onSuccess: () =>
              navigate('/', {
                replace: true,
              }),
          });
        }}
      >
        <TbLogout />
      </button>
    </div>
  );
}

export default Navbar;
