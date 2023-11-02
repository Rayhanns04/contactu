import React from 'react';
import { Input as InputAntd } from 'antd';
import './styles/input.scss';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

function Input({ label, message, name, control, password }) {
  return (
    <div className="Input_cntr">
      <p className="Input_label">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          password ? (
            <InputAntd.Password {...field} />
          ) : (
            <InputAntd {...field} />
          )
        }
      />
      <p className="Input_message">{message}</p>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.node.isRequired,
  password: PropTypes.bool,
};

Input.defaultProps = {
  message: '',
  password: false,
};

export default Input;
