import { useState } from 'react';
interface PropsValue {}
function useMergeValue(props) {
  const [mergeValue, setMergeValue] = useState();
  return [mergeValue, setMergeValue];
}
