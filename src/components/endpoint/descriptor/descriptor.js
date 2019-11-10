/* ------ Module imports ------ */
import React from 'react';

function Descriptor(props) {
  const {
    method,
    path,
  } = props;

  let color;
  switch (method) {
    case 'GET':
      color = 'blue';
      break;
    case 'POST':
      color = 'green';
      break;
    case 'PUT':
      color = 'orange';
      break;
    case 'PATCH':
      color = 'purple';
      break;
    case 'DELETE':
      color = 'red';
      break;
    default:
      color = 'gray';
  }

  return (
    <div className="w-112 bg-gray-800 font-mono text-xs p-3 mb-3 rounded-lg">
      <span className={`mr-3 text-white text-${color}-300`}>
        {method}
      </span>
      <span className="text-white">
        {path}
      </span>
    </div>
  );
}

export default Descriptor;
