/* ------ Module imports ------ */
import React from 'react';

function ChildAttribute(props) {
  const {
    description,
    name,
    type,
  } = props;

  return (
    <div>
      <p>
        <span>{name}</span>
        <span>{type}</span>
      </p>

      <p>{description}</p>
    </div>
  );
}

export default ChildAttribute;
