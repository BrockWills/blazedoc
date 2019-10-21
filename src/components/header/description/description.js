/* ------ Module imports ------ */
import React from 'react';

function Description(props) {
  const { children } = props;

  return (
    <p className="rg-header-description">
      {children}
    </p>
  );
}

export default Description;
