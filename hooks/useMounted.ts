import React from 'react';

const emptySubscribe = () => () => {};

export const useMounted = () => {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
};
