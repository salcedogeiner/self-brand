import React, { useState, useContext, createContext } from 'react'


const MainContext = createContext(null);

function useMain() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error(`mainContext must be used within a MainProvider`)
  }
  return context;
}

function MainProvider({ m, children }) {
  const [model, setModel] = useState(m);

  const value = React.useMemo(() => (
    {
      model,
      setModel
    }), [model]);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export { MainProvider, useMain }
