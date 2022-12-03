import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function MyProvider({ children }) {
  const [icon, setIcon] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const myContext = useMemo(() => ({
    icon,
    setIcon,
  }));
  return <Context.Provider value={myContext}>{children}</Context.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
