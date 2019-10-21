/* ------ Module imports ------ */
import React from 'react';

function Returns(props) {
  const { children } = props;

  return <p className="text-sm text-gray-700 mt-2">{children}</p>;
}

export default Returns;
