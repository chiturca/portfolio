import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });

  return <div className="layout">{childrenWithProps}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
