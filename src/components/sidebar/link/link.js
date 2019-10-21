/* ------ Module imports ------ */
import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import Sublink from 'components/sidebar/sublink';

function Link(props) {
  const {
    children,
    location,
    to,
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
    <div>
      <RouterLink
        className="rg-sidebar-link"
        to={to}
      >
        {title}
      </RouterLink>

      {location.pathname === to && renderElementByType(Sublink)}
    </div>
  );
}

export default withRouter(Link);
