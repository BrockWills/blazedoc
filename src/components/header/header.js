/* ------ Module imports ------ */
import React from 'react';

/* ------ Local components ------ */
import Description from './description';
import EndpointList from './endpoint-list';
import Title from './title';

function Header(props) {
  const { children } = props;

  function renderElementByType(type) {
    const elements = React.Children.toArray(children)
      .filter(child => child.type === type);

      return elements.length > 0
        ? elements[0]
        : null;
  }

  return (
    <div className="rg-header">
      <div>
        {renderElementByType(Title)}
        {renderElementByType(Description)}
      </div>
      <div>
        {renderElementByType(EndpointList)}
      </div>
    </div>
  );
}

Header.Description = Description;
Header.EndpointList = EndpointList;
Header.Title = Title;

export default Header;
