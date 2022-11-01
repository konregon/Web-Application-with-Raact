import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


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
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'black';
      showAlert("Light mode has been enable", "success")
      document.title = "TextUtils - Light Mode";
    }
    
  }

  return (
    <>
    <router>
    
<Navbar title="WeM8" mode={mode} toggleTheam={toggleTheam}/>

<Alert alert={alert}/>

<div className="container my-3">

<Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>

<About/>
</div>
</router>
    </>
  );
}

export default App;
