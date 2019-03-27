import React from 'react';

const renderSingleChildren = (children, props) =>
  children && React.cloneElement(
    children,
    props,
  );

const renderListOfChildren = (children, props) =>
  React.Children.map(
    children,
    (child) => renderSingleChildren(child, props),
  );

const renderChildren = (children, props) => (Array.isArray(children)
  ? renderListOfChildren(children, props)
  : renderSingleChildren(children, props));

export default renderChildren;
