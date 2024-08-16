import { useEffect, useState } from 'react';
// useEffect
function App() {
  // 1
  // const queryData = async () => {
  //   const data = await new Promise<number>((resolve) => {
  //     setTimeout(() => {
  //       resolve(666);
  //     }, 1000);
  //   });
  //   return data;
  // };
  // const [num, setNum] = useState(0);
  // useEffect(() => {
  //   console.log('effect');
  //   queryData().then((data) => {
  //     setNum(data);
  //   });
  // });
  // const [num, setNum] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(num);
  //   }, 1000);
  //   return () => {
  //     console.log('clean');
  //     clearInterval(timer);
  //   };
  // }, [num]);
  // return (
  //   <div
  //     onClick={() => {
  //       setNum(num + 1);
  //     }}>
  //     {num}
  //   </div>
  // );
}
export default App;
