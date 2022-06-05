import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,//We can use message: message as well
      type: type,// but for this case 1st one is name and 2nd one is parameter which will pass through the function
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'Text Editor - Dark Mode';//change the title 
      // To Enable diff Title so that user get attracted
      // setInterval(() => {
      //   document.title = 'Text Editor is now dark';
      // }, 2500);
      // setInterval(() => {
      //   document.title = 'Enable Light mode of Text Editor';
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'Text Editor - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* React Router Dom 5 is now out-Dated
      Routes is a replacent of Switch in react router dom v6
      <Router>
        <Navbar title="Ami Jani Na Nije add kre neben" mode={mode} aboutText="About Nothing" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router> */}

      {/* React Router Dom 6 is now the latest version of React */}
      <Router>
        <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>

      {/* <Navbar title="Ami Jani Na Nije add kre neben" mode={mode} aboutText="About Nothing" toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div> */}
    </>
  );
}

export default App;
