/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderAll, renderOne } from 'utils/render';

/* ------ Local components ------ */
import Link from './link';
import Logo from './logo';
import Group from './group';
import Sublink from './sublink';

function Sidebar(props) {
  const { children } = props;

  return (
    <div className="w-64 min-h-screen max-h-screen overflow-y-scroll p-6 fixed top-0 left-0 border-solid border-r border-gray-300">
      {renderOne(children, Logo)}
      {renderAll(children, Group)}
    </div>
  );
}

Sidebar.Link = Link;
Sidebar.Logo = Logo;
Sidebar.Group = Group;
Sidebar.Sublink = Sublink;

export default Sidebar;
