import React from 'react';
const MFE1 = React.lazy(() => import('mfe1/App'));
const MFE2 = React.lazy(() => import('mfe2/App'));

const App = () => {
  return (
    <div>
      <h1>Container</h1>
      <React.Suspense fallback="Loading MFE1">
        <div className="mfe-container">
          <MFE1 />
        </div>
      </React.Suspense>
      <React.Suspense fallback="Loading MFE2">
        <div className="mfe-container">
          <MFE2 />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
