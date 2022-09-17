import * as React from 'react';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import './style.css';

export default function App() {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    
  }

useEffect(() => {
  // global google

  google.accounts.id.initialize({
    client_id: "277985038929-k5hctsktthdu0llb29r5m7m1mirr81km.apps.googleusercontent.com",
    callback: handleCallbackResponse
  })
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}

  )
}, []);



  return (
    
    <div>
      <h1>Vibe MVP</h1>
      <p>Join, complete your unique profile, and find compatible and like-minded people around you to vibe with.</p>
    
      <div id="signInDiv"></div>
    
    </div>
      
  );
}
