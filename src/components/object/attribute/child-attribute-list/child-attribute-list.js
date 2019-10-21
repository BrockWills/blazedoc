/* ------ Module imports ------ */
import React, { useState } from 'react';

function ChildAttributeList(props) {
  const { children } = props;

  const [expanded, setExpanded] = useState(false);

  function renderExpandedView() {
    return (
      <ul>
        {children}
      </ul>
    );
  }

  function renderButtonView() {
    return (
      <button onClick={() => setExpanded(!expanded)}>SHOW CHILD ATTRIBUTES</button>
    );
  }

  return expanded
    ? renderExpandedView()
    : renderButtonView();
}

export default ChildAttributeList;
