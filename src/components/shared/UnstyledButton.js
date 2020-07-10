import React from 'react';

const UnstyledButton = ({onClick, disabled, children, className}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className}
    style={{'color': 'black', 'size': 20, 'fontWeight': 'bold'}}
  >
    {children}
  </button>
);

export default UnstyledButton;