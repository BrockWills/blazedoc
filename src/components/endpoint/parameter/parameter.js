/* ------ Module imports ------ */
import React from 'react';

function Parameter(props) {
  const {
    description,
    title,
    required,
  } = props;

  return (
    <li className="py-3 border-solid border-b border-gray-300 list-none last:border-b-0">
      <p>
        <span className="text-sm font-bold">{title}</span>
        {required && <span className="rg-endpoint-section-list-item-required text-orange-600 text-xs font-medium ml-2">REQUIRED</span>}
      </p>

      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </li>
  );
}

export default Parameter;
