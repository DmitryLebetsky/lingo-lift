import React from 'react';

import Input from '@material-ui/core/Input';

const InputView = ({
  placeholder = '',
  className = '',
  onChange,
  type,
  error,
  required,
}) => (
  <Input
    error={error}
    required={required}
    className={className}
    classes={{ input: 'input' }}
    placeholder={placeholder}
    onChange={onChange}
    type={type}
  />

);

export default InputView;