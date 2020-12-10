import React from 'react';
import './App.css';
import Utama from './Component/utama'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link"><Link to="/">Beranda</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><Link to="/tentangsaya">Tentang Saya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/karya">Karya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/kontak">kontak</Link></a>
            </li>
            {/* <p><Utama /></p> */}
          </ul>
        </div>
      </nav>
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;
