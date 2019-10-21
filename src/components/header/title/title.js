/* ------ Module imports ------ */
import React from 'react';

function Title(props) {
  const { children } = props;

  return (
    <h1 className="rg-header-title">
      {children}
    </h1>
  );
}

export default Title;
