import React from 'react';
import NewsList from './NewsList';
// const RemoteSliders = React.lazy(() => import('host/Sliders'));
import Header from 'app1/Header';
console.log('Header', Header);
import { VueInReact } from 'vuera';
const Header1 = VueInReact(Header);

const App = () => (
  <div>
    <h1>本地组件react的NewsList组件</h1>
    <NewsList />
    <h1>远程组件RemoteSliders</h1>
    <React.Suspense fallback="Loading RemoteSliders">
      <RemoteSliders></RemoteSliders>
    </React.Suspense>
    <h1>远程组件vue的Header组件</h1>
    <React.Suspense fallback="Loading Header">
      <Header1 name="app1"></Header1>
    </React.Suspense>

  </div>
)
export default App;