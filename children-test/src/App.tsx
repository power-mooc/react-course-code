import React, { FC, useEffect, useRef } from 'react';
import Portal from './Portal';
interface AaaProps {
  children: React.ReactNode[];
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;
  return (
    <div className="container">
      {children.map((item, index) => {
        return (
          <div key={index} className="item">
            {item}
          </div>
        );
      })}
    </div>
  );
};

// function App() {
//   return (
//     <Aaa>
//       <a href="www.baidu.com">111</a>
//       <a href="www.baidu.com">222</a>
//       <a href="www.baidu.com">333</a>
//     </Aaa>
//   );
// }

function App() {
  const containerRef = useRef<HTMLElement>(null);

  const content = (
    <div className="btn">
      <button>按钮</button>
    </div>
  );

  useEffect(() => {
    console.log(containerRef);
  }, []);

  return (
    <Portal attach={document.body} ref={containerRef}>
      {content}
    </Portal>
  );
}

export default App;
