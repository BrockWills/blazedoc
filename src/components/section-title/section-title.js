/* ------ Module imports ------ */
import React from 'react';

function SectionTitle(props) {
  const { children } = props;

  return (
    <p className="text-xs text-gray-600 font-medium mt-10 pb-2 border-solid border-b border-gray-300 uppercase">
      {children}
    </p>
  );
}

export default SectionTitle;
