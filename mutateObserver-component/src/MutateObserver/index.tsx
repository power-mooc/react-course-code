import React, { useLayoutEffect, useRef, useState } from 'react';
import useMutationObserve from './useMutationObserver';

interface MutationObserverProps {
  option?: MutationObserverInit;
  onMutate: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}

const MutationObserver = (props: MutationObserverProps) => {
  const { option, onMutate = () => {}, children } = props;

  const elementRef = useRef<HTMLElement>(null);
  const [target, setTarget] = useState<HTMLElement>();

  useMutationObserve(target!, onMutate, option);
  useLayoutEffect(() => {
    setTarget(elementRef.current!);
  }, []);
  if (!children) {
    return null;
  }
  return React.cloneElement(children, { ref: elementRef });
};

export default MutationObserver;
