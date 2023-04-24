import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import IMG from './watch.png';
import { Tween } from 'react-gsap';
import gsap from 'gsap';
function App() {
  
  const logoRef = useRef(null);
  const liRef = useRef(null);
  const searchRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  const menuText = [
    {
      menu: 'collection'
    },
    {
      menu: 'collection'
    },
    {
      menu: 'collection'
    },
    {
      menu: 'collection'
    }
  ]
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    console.log(el)
    
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
    console.log(revealRefs.current)
  }

  

  useEffect(() =>{
      gsap.fromTo(logoRef.current, {
        opacity: 0,
        x: -20,
      },{
        opacity: 1,
        x: 0,
        ease: "expo.inOut",
        duration: 1,
     
      })

      revealRefs.current.forEach((el, index) => {
        gsap.fromTo(el, {
          opacity: 0,
          x: -20
        },{
          duration: 1,
          opacity: 1,
          x: 0,
          ease: "power3.inOut",
          delay: 0.2 * index
        })
      })
  },[]);
  useEffect(() =>{
    gsap.fromTo(titleRef.current, {
      opacity: 0,
      y: 0
    }, {
      opacity: 1,
      y: -20,
      ease: "expo.inOut",
      duration: 1,
   
    })
},[titleRef]);

  useEffect(() =>{
    gsap.fromTo(imgRef.current, {
      opacity: 0,
      y: -800
    }, {
      opacity: 1,
      y: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: 1.5,
  
    })
  },[imgRef]);



 
 
  
  return (
    <div class = "container">
      <div class = "stripes" >
        <div class = "line-one"></div>
        <div class = "line-two"></div>
      </div>
      
      <nav>
          <div class = "logo" ref={logoRef}>
            <span>Omega</span>
          </div>
          <ul >
            {
              menuText.map(({menu}) => {
                return (
                  <li ref={addToRefs}><a href = "">{menu}</a></li>
                )
              })

            }
            {/* <li><a href = "">collection</a></li>
            <li><a href = "">products</a></li>
            <li><a href = "">offers</a></li>
            <li><a href = "">Contact</a></li> */}
          </ul>

          <div class = "search">
              <i class = "fa fa-search">search</i>
          </div>
          <div class = "menu">
              <i class = "fa fa-bars">bars</i>
          </div>

      </nav>

      <div class = "img" ref={imgRef}> 
        <img src={IMG}></img>
      </div>

      <div class ="title" ref={titleRef}>
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
