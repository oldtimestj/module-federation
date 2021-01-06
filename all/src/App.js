import React from 'react';
const RemoteNewsList = React.lazy(() => import('remote/NewsList'));
const RemoteSliders = React.lazy(() => import('host/Sliders'));
console.log('RemoteSliders', RemoteSliders);
import Header from 'app1/Header';
import { VueInReact } from 'vuera';
const Header1 = VueInReact(Header);

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
    <h1>远程组件vue的Header组件</h1>
    <React.Suspense fallback="Loading Header">
      <Header1 name="app1"></Header1>
    </React.Suspense>
  </div>
)
export default App;