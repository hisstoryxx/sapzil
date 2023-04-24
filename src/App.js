import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import IMG from './watch.png';

function App() {


  

  
  return (
    <div class = "container">
      <div class = "stripes" >
        <div class = "line-one"></div>
        <div class = "line-two"></div>
      </div>
      
      <nav>
          <div class = "logo">
            <span>Omega</span>
          </div>
          <ul>
            <li><a href = "">collection</a></li>
            <li><a href = "">products</a></li>
            <li><a href = "">offers</a></li>
            <li><a href = "">Contact</a></li>
          </ul>

          <div class = "search">
              <i class = "fa fa-search">search</i>
          </div>
          <div class = "menu">
              <i class = "fa fa-bars">bars</i>
          </div>

      </nav>

      <div class = "img"> 
        <img src={IMG}></img>
      </div>

      <div class ="title">
        <p>speedmaster</p>
        <span>Monnwatch.</span>
      </div>

      <div class = "btn">
        <a href="">Order Now</a>
      </div>

      <div class = "media">
          <ul>
            <li><i class = "fa fa-facebook">facebook</i></li>
            <li><i class = "fa fa-instagram">instagram</i></li>
            <li><i class = "fa fa-twiiter">twiiter</i></li>
          </ul>

      </div>

   </div>
  )
}

export default App;
