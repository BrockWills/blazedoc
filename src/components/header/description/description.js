/* ------ Module imports ------ */
import React from 'react';

function Description(props) {
  const { children } = props;

  return (
    <p className="mt-4 leading-normal text-gray-700">
      {children}
    </p>
  );
}

export default Description;
