import React, { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type = 'text', ...rest }) => {
  return <input type={type} {...rest} />;
};

export default Input;
