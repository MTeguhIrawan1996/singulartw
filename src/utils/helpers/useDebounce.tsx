import * as React from 'react';

export function useDebounceState(initialValue: string, delay = 300) {
  const [state, setState] = React.useState(initialValue);
  const [debouncedState, setDebouncedState] = React.useState(initialValue);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);

  return [debouncedState, setState];
}

export function useDebounceValue(value: string, delay = 300) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
