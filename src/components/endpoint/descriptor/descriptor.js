/* ------ Module imports ------ */
import React from 'react';

function Descriptor(props) {
  const {
    method,
    path,
  } = props;

  return (
    <div className="rg-endpoint-descriptor">
      <span className={'rg-endpoint-descriptor-method rg-endpoint-descriptor-method-' + method.toLowerCase()}>
        {method}
      </span>
      <span className="rg-endpoint-descriptor-path">
        {path}
      </span>
    </div>
  );
}

export default Descriptor;
