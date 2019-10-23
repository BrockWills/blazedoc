/* ------ Module imports ------ */
import React from 'react';

function Title(props) {
  const { children } = props;

  return (
    <h1 className="text-2xl tracking-tight font-light">
      {children}
    </h1>
  );
}

export default Title;
