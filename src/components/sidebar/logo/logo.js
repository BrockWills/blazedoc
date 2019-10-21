import React from 'react';

function Logo(props) {
  const {
    height,
    src,
    width,
  } = props;

  const styleProps = {};

  if (height) {
    styleProps.height = height;
  }
  if (width) {
    styleProps.width = width;
  }

  return (
    <img
      alt=""
      src={src}
      style={styleProps}
    />
  );
}

export default Logo;
