import React from 'react';
const RemoteNewsList = React.lazy(() => import('remote/NewsList'));
const RemoteSliders = React.lazy(() => import('host/Sliders'));

const App = () => (
  <div>
    <h1>远程组件RemoteSliders</h1>
    <React.Suspense fallback="Loading RemoteSliders">
      <RemoteSliders></RemoteSliders>
    </React.Suspense>
    <br />
    <h1>远程组件NewsList</h1>
    <React.Suspense fallback="Loading NewsList">
      <RemoteNewsList></RemoteNewsList>
    </React.Suspense>
  </div>
)
export default App;