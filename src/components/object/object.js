/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderAll } from 'utils/render';

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

  return (
    <div className="flex justify-between py-16 border-solid border-b border-gray-300 last:border-b-0">
      <div className="mr-16 flex-1">
        <h3 className="font-medium uppercase rg-endpoint-title">{title}</h3>

        <SectionTitle>Attributes</SectionTitle>
        <ul>
          {renderAll(children, Attribute)}
        </ul>
      </div>

      <div>
        <JsonHighlighter>{exampleJSON}</JsonHighlighter>
      </div>
    </div>
  );
}

Object.Attribute = Attribute;

export default Object;
