import React from 'react';
import './App.css';
import LoginPage from './Login';

function App() {
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://YOUR_MATOMO_TAG_MANAGER_CONTAINER_URL'; // Replace with your Matomo Tag Manager container URL

    if (s && s.parentNode) {
      s.parentNode.insertBefore(g, s);
    } else {
      console.error("Unable to find the parent node to insert the Matomo script");
    }
  }, []);

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
