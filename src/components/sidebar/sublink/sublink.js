/* ------ Module imports ------ */
import React from 'react';
import { Link } from 'react-router-dom';

function Sublink(props) {
  const { children, hash } = props;

  return (
    <Link
      className="rg-sidebar-sublink"
      to={`#${hash}`}
    >
      {children}
    </Link>
  );
}

export default Sublink;
