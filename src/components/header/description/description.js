/* ------ Module imports ------ */
import React from 'react';

function Description(props) {
  const { children } = props;

  return (
    <p className="flex-1 leading-normal text-gray-700">
      {children}
    </p>
  );
}

export default Description;
