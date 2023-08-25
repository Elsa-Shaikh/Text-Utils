// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



// let name = "Elsa Shaikh";
function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert= (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },3000);
 }

 const enableMode = ()=>{
  if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor='#042743';
  showAlert("Dark Mode Enable","success");
  document.title = "TextUtils - Dark Mode";
//   setInterval(() => {
//     document.title = "TextUtils is Amazing";
//   }, 2000);
// setInterval(() => {
//   document.title = "Install TextUtils Now"; 
// }, 1500);

}else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light Mode Enable","success");
  document.title = "TextUtils - Light Mode";
}

}

  return (
   <>
 <Router>
  <Navbar title="TextUtils" aboutText = "About Us" mode={mode} enableMode={enableMode}/>
  <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<Aboutus/>}></Route>
      <Route exact path="/" element={<TextForm heading= "Enter the text to analyze below" mode={mode} showAlert= {showAlert}/>
}></Route>
    </Routes>
  </Router>
   </>
  );
}

export default App;
