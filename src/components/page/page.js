/* ------ Module imports ------ */
import React from 'react';

function Page(props) {
  const { children } = props;

  return (
    <div className="rg-page">
      <div className="rg-page-container">
        {children}
      </div>
    </div>
  );
}

export default Page;
