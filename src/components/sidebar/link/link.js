/* ------ Module imports ------ */
import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

/* ------ Utils ------ */
import { renderAll } from 'utils/render';

/* ------ Components ------ */
import Sublink from 'components/sidebar/sublink';

function Link(props) {
  const {
    children,
    location,
    to,
    title,
  } = props;

  return (
    <div>
      <RouterLink
        className="block py-2 text-sm font-medium text-gray-700"
        to={to}
      >
        {title}
      </RouterLink>

      {location.pathname === to && renderAll(children, Sublink)}
    </div>
  );
}

export default withRouter(Link);
