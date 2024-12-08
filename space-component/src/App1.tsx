import React from 'react';

interface TestProps {
  children: React.ReactNode[];
}

function Test(props: TestProps) {
  // const children2 = React.Children.toArray(props.children);

  console.log(Array.isArray(props.children));
  return <div></div>;
}

export default function App() {
  return (
    <Test>
      {33}
      <span>hello world</span>
      {22}
      {11}
    </Test>
  );
}
