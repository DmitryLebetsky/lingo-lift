import React from 'react';

import classNames from 'classnames';

const LiquidButton = ({
  text = 'Your text',
  onClick = () => {},
  className = '',
  calm = false,
}) => {
  const luqidContainerClasses = classNames({
    'liquid-button-container': true,
    [className]: true,
    'liquid-button-container_calm': calm,
  });
  const liquidClasses = classNames({
    liquid: true,
    liquid_calm: calm,
  });
  return (
    <button onClick={onClick} className={luqidContainerClasses}>
      <span className="liquid-button-container__text">{text}</span>
      <div className={liquidClasses}></div>
    </button>
  );
};

export default LiquidButton;