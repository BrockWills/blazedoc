/* ------ Module imports ------ */
import React from 'react';

/* ------ Local Components ------ */
import ChildAttribute from './child-attribute';
import ChildAttributeList from './child-attribute-list';

function Attribute(props) {
  const {
    children,
    description,
    expandable,
    name,
    type,
  } = props;

  function renderElementByType(type) {
    const elements = React.Children.toArray(children)
      .filter(child => child.type === type);

    return elements.length > 0
      ? elements
      : null;
  }

  const childAttributes = renderElementByType(ChildAttribute);
  return (
    <div className="rg-object-attribute">
      <p>
        <span className="rg-object-attribute-name">{name}</span>
        <span className="rg-object-attribute-type">{type}</span>
        {expandable && <span className="rg-object-attribute-expandable">EXPANDABLE</span>}
      </p>

      <p className="text-sm text-gray-700 mt-2">{description}</p>

      {childAttributes && childAttributes.length > 0 && (
        <ChildAttributeList>
          {childAttributes}
        </ChildAttributeList>
      )}
    </div>
  );
}

export default Attribute;
