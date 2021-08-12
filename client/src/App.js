import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [UserName, setUserName] = useState([]);

  useEffect(() => {
    fetchTest()
  }, [])
  
  const fetchTest = () => {
    axios.get('http://localhost:8001/api').then(res => {
      setUserName(res.data.username);
      console.log("res : ", res.data);
      console.log("UserName : ",UserName);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`${UserName}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
