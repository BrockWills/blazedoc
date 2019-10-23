/* ------ Module imports ------ */
import React from 'react';
import { Link } from 'react-router-dom';

function Sublink(props) {
  const { children, hash } = props;

  return (
    <Link
      className="block py-1 ml-4 text-sm text-gray-700"
      to={`#${hash}`}
    >
      {children}
    </Link>
  );
}

export default Sublink;
