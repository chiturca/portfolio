import React, { useState, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: ReactNode;
}

interface ChildProps {
  handleToggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleToggleDarkMode } as ChildProps);
    }
    return child;
  });

  return (
    <div className="layout" id={`${isDarkMode ? '' : 'light-mode'}`}>
      {childrenWithProps}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
