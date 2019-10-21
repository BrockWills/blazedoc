/* ------ Module imports ------ */
import React from 'react';

/* ------ Components ------ */
import SectionTitle from 'components/section-title';
import JsonHighlighter from 'components/json-highlighter';

/* ------ Local components ------ */
import Attribute from './attribute';

function Object(props) {
  const {
    children,
    exampleJSON,
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
    <div className="rg-object">
      <div className="rg-object-details">
        <h3 className="rg-object-title">{title}</h3>

        <SectionTitle>Attributes</SectionTitle>
        {renderElementByType(Attribute)}
      </div>
      <div>
        <JsonHighlighter>{exampleJSON}</JsonHighlighter>
      </div>
    </div>
  );
}

Object.Attribute = Attribute;

export default Object;
