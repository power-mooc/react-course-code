// useReducer
import { Reducer, useReducer, useState } from 'react';
import { produce } from 'immer';
// interface Data {
//   result: number;
// }

// interface Action {
//   type: 'add' | 'minus';
//   num: number;
// }

interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}
interface Action {
  type: 'add';
  num: number;
}
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case 'add':
      return produce(state, (state) => {
        state.a.c.e += action.num;
      });
  }
  return state;
}

function App() {
  // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0 });
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return {
      a: {
        c: {
          e: 0,
          f: 0,
        },
        d: 0,
      },
      b: 0,
    };
  });
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  });
  return (
    <div>
      <div
        onClick={() => {
          dispatch({ type: 'add', num: 1 });
        }}>
        +
      </div>
      <div
        onClick={() => {
          setObj(
            produce(obj, (obj) => {
              obj.a.c.e += 1;
            })
          );
        }}>
        加
      </div>
      <div>{JSON.stringify(res)}</div>
      <div>{JSON.stringify(obj)}</div>
    </div>
  );
}
export default App;
