import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const instance = createInstance({
  urlBase: 'http://localhost:8086/',
  siteId: 1,
  trackerUrl: 'http://localhost:8086/tracking.php', // optional, default value: `${urlBase}matomo.php`
  srcUrl: 'http://localhost:8086/js/container_VU0IJMi9.js', // optional, default value: `${urlBase}matomo.js`
  disabled: true, // optional, false by default. Makes all tracking calls no-ops if set to true.
  heartBeat: { // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10 // optional, default value: `15
  },
  linkTracking: false, // optional, default value: true
  configurations: { // optional, default value: {}
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MatomoProvider value={instance}>
    <App />
    </MatomoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
