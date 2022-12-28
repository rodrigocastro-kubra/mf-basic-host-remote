import React from 'react';

const RemoteGreeting = React.lazy(() => import('app2/Greeting'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Greeting">
      <RemoteGreeting />
    </React.Suspense>
  </div>
);

export default App;
