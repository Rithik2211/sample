import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Demo from './useMemo/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Demo />
  </React.StrictMode>
);

