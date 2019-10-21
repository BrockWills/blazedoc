/* ------ Module imports ------ */
import React from 'react';

function renderAll(children, type) {
  const elements = React.Children.toArray(children)
    .filter(child => child.type === type);

  return elements.length > 0
    ? elements
    : null;
}

function renderOne(children, type) {
  const elements = renderAll(children, type);

  return (elements && elements.length > 0)
    ? elements[0]
    : null;
}

export { renderAll, renderOne };
