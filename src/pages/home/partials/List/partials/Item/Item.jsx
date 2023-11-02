import React from 'react';
import './styles/item.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Item({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className="Item_cntr"
      onClick={() => navigate(`${data?.id}`)}
      role="button"
    >
      <div className="Item_frame">
        <img
          src={data?.avatar}
          alt={data?.first_name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="Item_content">
        <h2>
          {data?.first_name} {data?.last_name}
        </h2>
        <p>{data?.email}</p>
      </div>
      <div className="Item_no">{data?.id}</div>
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Item;
