import "./App.css";
import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [textChange, settextChange] = useState('Enable light mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
 const toggleMode = ()=>{
    if (mode ==='dark') {
      setMode('light');
      settextChange('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
    else{
      setMode('dark');
      settextChange('Enable light mode');
      document.body.style.backgroundColor = '#393c3d';
      showAlert("Dark mode has been enable", "success")


    }
  }
  return (
    <>
     

      
      <Navbar mode={mode} toggleMode  = {toggleMode} textChange = {textChange} />
      <Alert alert = {alert}/>
      
      <div className="container mt-3">
    
         
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
           
        
          
       
        
      </div>
       
    </>
  );
}

export default App;
