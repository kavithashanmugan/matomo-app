import React, { useState, useEffect } from 'react';
import { useMatomo } from '@jonkoops/matomo-tracker-react';
import MatomoTracker from '@jonkoops/matomo-tracker'

const tracker = new MatomoTracker({
    urlBase: 'http://localhost:8086/',
    siteId: 1,
    trackerUrl: 'http://localhost:8086/tracking.php', // optional, default value: `${urlBase}matomo.php`
    srcUrl: 'http://localhost:8086/tracking.js', // optional, default value: `${urlBase}matomo.js`
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


const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const { pushInstruction } = useMatomo();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleLoginSuccess = () => {
    // Store the userId for future use (optional)
    localStorage.setItem('loggedInUserId', userId);
    
    // Set the User ID in Matomo
    pushInstruction('setUserId', userId);
    
    // Log the login event (optional)
    pushInstruction('trackEvent', 'User', 'Login', userId);

    alert(`User ID ${userId} has been set in Matomo.`);
  };

  useEffect(() => {
// Load the event listeners
tracker.trackEvents()
// Track page views
tracker.trackPageView()
  }, []);
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={handleInputChange}
      />
      <button onClick={handleLoginSuccess}>Login</button>
    </div>
  );
};

export default LoginPage;
