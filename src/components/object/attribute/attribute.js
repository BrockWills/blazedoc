/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderAll } from 'utils/render';

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

  const childAttributes = renderAll(children, ChildAttribute);
  return (
    <li className="py-3 border-solid border-b border-gray-300 list-none last:border-b-0">
      <p>
        <span className="text-sm font-bold">{name}</span>
        <span className="text-gray-600 text-xs ml-2">{type}</span>
        {expandable && <span className="text-xs font-medium ml-2 text-blue-500 uppercase">Expandable</span>}
      </p>

      <p className="text-sm text-gray-700 mt-2">{description}</p>

      {childAttributes && childAttributes.length > 0 && (
        <ChildAttributeList>
          {childAttributes}
        </ChildAttributeList>
      )}
    </li>
  );
}

export default Attribute;
