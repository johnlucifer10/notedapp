import React from "react"
import { render } from "react-dom";
import firebase from '../firebase'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FaLock } from 'react-icons/fa';

export default function Home() {
  

  function handleClick(e) {
    var numbesr=document.getElementById("outlined-basic").value;  
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = numbesr;
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        if(code === null) return;
  
        
        e.confirm(code).then(function (result) {
            console.log(result.user);
  
            document.querySelector('label').textContent +=   result.user.phoneNumber + " Number verified";
            
        }).catch(function (error) {
            console.error( error);
            
        });
  
    })
    .catch(function (error) {
        console.error( error);
  
    });
  }
  
  return <div>
  <h1 style={{ 'textAlign': 'center', fontFamily: 'sans-serif' }}>Noted.</h1>
  <h1><label></label></h1>
  <TextField id="outlined-basic" label="Enter Phone Number:(+xx)" variant="outlined" />
  <Button variant="outlined" onClick={handleClick}>< FaLock/> &nbsp;‎ OTP</Button>
<div id="recaptcha"></div>
</div>
  
}
