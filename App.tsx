import * as React from 'react';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './style.css';

export default function App() {
  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);

    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    // global google code, latest 2022 version
    google.accounts.id.initialize({
      client_id:
        '277985038929-k5hctsktthdu0llb29r5m7m1mirr81km.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div id="mainContainer" className="boxShadow">
      <h1 className={'mainHeader vibeBlue center textShadow'}>Vibe</h1>
      <p>
        Create your unique profile and find compatible &amp; like-minded
        people to vibe with IRL.
      </p>

      {/* if signed out */}
      <div id="signInDiv"></div>

      <div id="publicFeed"></div>

      {/* if signed in */}
      <div id="loggedInFeed"></div>
    </div>
  );
}
