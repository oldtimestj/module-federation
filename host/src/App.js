import React from 'react';
import Sliders from './Sliders';
const RemoteNewsList = React.lazy(() => import('remote/NewsList'));

const App = () => (
  <div>
    <h1>本地组件Sliders</h1>
    <Sliders />
    <h1>远程组件NewsList</h1>
    <React.Suspense fallback="Loading NewsList">
      <RemoteNewsList></RemoteNewsList>
    </React.Suspense>
  </div>
)
export default App;