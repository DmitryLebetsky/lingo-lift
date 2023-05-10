import React from 'react';

import Button from '@material-ui/core/Button';

const ButtonView = ({
  type = 'primary',
  value = 'Button',
  className = '',
  disabled,
}) => (
  <Button
    type="submit"
    className={className}
    classes={{ root: `btn btn-${type}` }}
    variant="contained"
    size="large"
    disabled={disabled}
  >
    {value}
  </Button>
);

export default ButtonView;