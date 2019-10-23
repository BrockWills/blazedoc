/* ------ Module imports ------ */
import React from 'react';
import { Link } from 'react-router-dom';

function Endpoint(props) {
  const {
    hash,
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
    case 'DELETE':
      color = 'red';
      break;
    default:
      color = 'gray';
  }

  return (
    <Link to={'#' + hash} className="text-xs font-mono block py-2 px-3">
      <span className={`inline-block w-10 mr-3 text-${color}-500`}>{method}</span>
      <span>{path}</span>
    </Link>
  );
}

function EndpointList(props) {
  return (
    <div className="w-112 ml-6 bg-gray-100 rounded-lg overflow-hidden border-solid border border-gray-300">
      <p className="py-2 px-3 text-xs text-gray-700 font-medium uppercase bg-gray-300">Endpoints</p>
      {props.endpoints.map(endpoint => <Endpoint key={endpoint.hash} {...endpoint} />)}
    </div>
  );
}

export default EndpointList;
