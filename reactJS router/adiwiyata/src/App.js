import React from 'react';
import Utama from './Component/utama'
import { Link } from 'react-router-dom'
import './style.css'

function App() {
  return (
    <div>
      <div className="bekgron">
        <div className="menu">
          <div className="logo">
            <h4>Adiwiyata</h4>
          </div>
          <ul>
            <li className="per">
              <a><Link to="/" className="a">Beranda</Link></a>
            </li>
            <li>
              <a><Link to="/gallery" className="a">Gallery</Link></a>
            </li>
            <li>
              <a><Link to="/haribesar" className="a">Hari Besar</Link></a>
            </li>
          </ul>
        </div>
        <div className="judul">
            <h1>Adiwiyata</h1>
        </div>
        <div className="baten">
            <a href="#">Go</a>
        </div>
      </div>
      <div>
        <p><Utama /></p>
      </div>
    </div>
  );
}

export default App;
