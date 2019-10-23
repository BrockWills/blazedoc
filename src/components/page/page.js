/* ------ Module imports ------ */
import React from 'react';

function Page(props) {
  const { children } = props;

  return (
    <div className="pl-64">
      <div className="w-full max-w-4xl m-auto py-12">
        {children}
      </div>
    </div>
  );
}

export default Page;
