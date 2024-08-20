// React 组件如何写 TypeScript 类型
interface AaaProps {
  name: string;
  content: React.ReactNode;
}

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
    </div>
  );
};

function App() {
  return (
    <div>
      <Aaa name="power" content={<button>btn</button>} />
    </div>
  );
}
export default App;
