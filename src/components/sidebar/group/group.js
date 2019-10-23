/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderAll } from 'utils/render';

/* ------ Components ------ */
import Link from 'components/sidebar/link';

function Group(props) {
  const {
    children,
    title,
  } = props;

  return (
    <div className="mt-6">
      {title && <p className="py-2 text-xs font-medium uppercase text-gray-500">{title}</p>}

      {renderAll(children, Link)}
    </div>
  );
}

export default Group;
