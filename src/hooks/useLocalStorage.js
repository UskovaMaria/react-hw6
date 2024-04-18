import React, { useState, useEffect } from 'react';


export const useLocalStorage = (key, defData) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData || defData;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);
  return [state, setState];
};

