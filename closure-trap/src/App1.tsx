// React 组件如何写 TypeScript 类型
interface childProps {
  name: string;
  content: React.ReactNode;
}

function Child(props: childProps) {
  return (
    <div>
      {props.name} {props.content}
    </div>
  );
}

function App() {
  return (
    <div>
      <Child name="power" content={<button>btn</button>} />
    </div>
  );
}
export default App;
