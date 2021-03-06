/* ------ Module imports ------ */
import React from 'react';

/* ------ Utils ------ */
import { renderAll, renderOne } from 'utils/render';

/* ------ Components ------ */
import JsonHighlighter from 'components/json-highlighter';
import SectionTitle from 'components/section-title';

/* ------ Local components ------ */
import Descriptor from './descriptor';
import Parameter from './parameter';
import Returns from './returns';

function Endpoint(props) {
  const {
    children,
    description,
    exampleJSON,
    hash,
    method,
    path,
    title,
  } = props;

  function renderParams() {
    const parameters = renderAll(children, Parameter);
    if (!parameters || parameters.length === 0) {
      return null;
    }

    return (
      <div>
        <SectionTitle>Parameters</SectionTitle>
        {parameters}
      </div>
    );
  }

  function renderReturns() {
    const returns = renderOne(children, Returns);
    if (!returns) {
      return null;
    }

    return (
      <div>
        <SectionTitle>Return</SectionTitle>
        {returns}
      </div>
    );
  }

  return (
    <div id={hash} className="flex justify-between py-16 border-solid border-b border-gray-300 last:border-b-0">
      <div className="mr-16 flex-1">
        <h1 className="font-medium uppercase">{title}</h1>
        <p className="text-sm text-gray-700 mt-4">{description}</p>

        {renderParams()}
        {renderReturns()}
      </div>

      <div>
        <Descriptor
          method={method}
          path={path}
        />

        <JsonHighlighter>{exampleJSON}</JsonHighlighter>
      </div>
    </div>
  );
}

Endpoint.Parameter = Parameter;
Endpoint.Returns = Returns;

export default Endpoint;
