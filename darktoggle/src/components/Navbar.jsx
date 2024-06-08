import React, { useState } from 'react';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';

function Navbar() {
const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="d-flex">
          <button onClick={toggleDarkMode} className="btn btn-outline-dark togglebtn">
            {darkMode ? <CiLight/> : <CiDark/>}
          </button>
        </div>
      </div>
    </nav>
    <main className="container mt-5">
      <h2>Hello World. Kinshuk Here!!</h2>
      <p>This is the demo for the Dark Light Toggle Mode  </p>
    </main>
  </div>
  )
}

export default Navbar