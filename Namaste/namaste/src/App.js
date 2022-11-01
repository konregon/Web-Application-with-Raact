import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('dark'); // wether any mode is enable or not // state variable

  const toggleTheam = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
    
  }

  return (
    <>
    
<Navbar title="WeM8" mode={mode} toggleTheam={toggleTheam}/>

{/* <TextForm heading="Enter the Text to analysis"/> */}

<About/>
    </>
  );
}

export default App;
