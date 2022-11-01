import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('dark'); // wether any mode is enable or not // state variable
  const [alert, setAlert] = useState(null); // alert is object here

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleTheam = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'black';
      showAlert("Light mode has been enable", "success")
    }
    
  }

  return (
    <>
    
<Navbar title="WeM8" mode={mode} toggleTheam={toggleTheam}/>

<Alert alert={alert}/>

<TextForm mode={mode} heading="Enter the Text to analysis"/>

<About/>


    </>
  );
}

export default App;
