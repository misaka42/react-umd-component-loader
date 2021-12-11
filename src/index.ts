import React, { useEffect, useState } from 'react';
import { loadUMDFromURL } from 'dynamic-umd-loader';

interface IProps {
  loader: Parameters<typeof loadUMDFromURL>;
  fallback?: React.ReactElement;
  args?: Record<string, any>;
}

export const ReactUMDComponentLoader: React.FC<IProps> = ({ loader, fallback, args, children }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadUMDFromURL(...loader).then(() => setReady(true));
  }, []);

  if (!ready) {
    return fallback || null;
  }

  return React.createElement(getReactComponent(loader[1]), args, children);
};

function getReactComponent(moduleName: string): React.FC {
  if (moduleName in window) {
    return (window as any)[moduleName];
  }
  throw new Error(`${moduleName} not exist in window, please check the umd module name.`);
}
