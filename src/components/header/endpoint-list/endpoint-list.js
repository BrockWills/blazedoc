/* ------ Module imports ------ */
import React from 'react';
import { Link } from 'react-router-dom';

function Endpoint(props) {
  const {
    hash,
    method,
    path,
  } = props;

  return (
    <Link to={'#' + hash} className="rg-header-endpoint-list-endpoint">
      <span className={'rg-header-endpoint-list-endpoint-method rg-header-endpoint-list-endpoint-method-' + method.toLowerCase()}>{method}</span>
      <span className="rg-header-endpoint-list-endpoint-path">{path}</span>
    </Link>
  );
}

function EndpointList(props) {
  return (
    <div className="rg-header-endpoint-list">
      <p className="rg-header-endpoint-list-title">Endpoints</p>
      <div className="rg-header-endpoint-list-body">
        {props.endpoints.map(endpoint => <Endpoint key={endpoint.hash} {...endpoint} />)}
      </div>
    </div>
  );
}

export default EndpointList;
