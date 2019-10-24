/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderOne } from 'utils/render';

/* ------ Local components ------ */
import Description from './description';
import EndpointList from './endpoint-list';
import Title from './title';

function Header(props) {
  const { children } = props;

  return (
    <div className="pb-16 border-solid border-b border-gray-300">
      <div>
        {renderOne(children, Title)}
      </div>
      <div className="flex justify-between mt-4">
        {renderOne(children, Description)}
        {renderOne(children, EndpointList)}
      </div>
    </div>
  );
}

Header.Description = Description;
Header.EndpointList = EndpointList;
Header.Title = Title;

export default Header;
