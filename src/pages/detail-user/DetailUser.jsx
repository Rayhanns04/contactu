import React from 'react';
import './styles/detail_user.scss';
import Navbar from './partials/navbar';
import Action from './partials/action';
import ModalContainer from './partials/modal-container';
import Content from './partials/content';

function DetailUser() {
  return (
    <div className="DetailUser_cntr">
      <ModalContainer />
      <Navbar />
      <Content />
      <Action />
    </div>
  );
}

export default DetailUser;
