import React, { FC } from 'react';

interface AaaProps {
  children: React.ReactNode[];
}

const Aaa: FC<AaaProps> = (props) => {
  const { children } = props;
  console.log(children);
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

function App() {
  return (
    <Aaa>
      <a href="www.baidu.com">111</a>
      <a href="www.baidu.com">222</a>
      <a href="www.baidu.com">333</a>
    </Aaa>
  );
}

export default App;
