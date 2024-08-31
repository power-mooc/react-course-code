import { SetStateAction, useState, Dispatch, useEffect } from 'react';
interface PropsValue<T> {
  defaultValue?: T;
  value?: T;
  onChange?: (date: T) => void;
}
function useMergeValue<T>(defaultState: T, props: PropsValue<T>): [T, Dispatch<SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props;
  const [mergeValue, setMergeValue] = useState(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultState;
    }
  });
  useEffect(() => {
    setMergeValue();
  }, [propsValue]);

  return [mergeValue, setMergeValue];
}
