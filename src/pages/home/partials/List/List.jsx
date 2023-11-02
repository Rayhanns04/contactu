import React from 'react';
import PropTypes from 'prop-types';
import Item from './partials/Item';
import './styles/list.scss';

function Lists({ users }) {
  return (
    <div className="Lists_cntr">
      {users?.map((item) => (
        <Item key={item?.id} data={item} />
      ))}
    </div>
  );
}

Lists.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Lists;
