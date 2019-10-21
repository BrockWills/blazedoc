/* ------ Module imports ------ */
import React from 'react';

import Link from 'components/sidebar/link';

function Group(props) {
  const {
    children,
    title,
  } = props;

  function renderElementByType(type) {
    const elements = React.Children.toArray(children)
      .filter(child => child.type === type);

      return elements.length > 0
        ? elements
        : null;
  }

  return (
    <div className="rg-sidebar-group">
      {title && <label className="rg-sidebar-group-title">{title}</label>}

      {renderElementByType(Link)}
    </div>
  );
}

export default Group;
