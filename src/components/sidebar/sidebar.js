/* ------ Module imports ------ */
import React from 'react';

/* ------ Local components ------ */
import Link from './link';
import Logo from './logo';
import Group from './group';
import Sublink from './sublink';

function Sidebar(props) {
  const { children } = props;

  function renderElementByType(type, renderAll) {
    const elements = React.Children.toArray(children)
      .filter(child => child.type === type);

      return elements.length > 0
        ? (renderAll ? elements : elements[0])
        : null;
  }

  return (
    <div className="rg-sidebar">
      {renderElementByType(Logo, false)}
      {renderElementByType(Group, true)}
    </div>
  );
}

Sidebar.Link = Link;
Sidebar.Logo = Logo;
Sidebar.Group = Group;
Sidebar.Sublink = Sublink;

export default Sidebar;
