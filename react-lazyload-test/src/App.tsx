import img1 from './img1.jpg';
import img2 from './img2.jpg';
import LazyLoad from './MyLazyload';
import React from 'react';
export default function App() {
  const LazyGuang = React.lazy(() => import('./Guang'));
  return (
    <div>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img1} />
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img2} />
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>}>
        <LazyGuang />
      </LazyLoad>
    </div>
  );
}
