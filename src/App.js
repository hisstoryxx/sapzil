import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const myRef = useRef();

  const [y, setY] = useState();
  const [h, setH] = useState();

    
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);


  // This function calculate X and Y
  const getPosition = () => {
    const h = myRef.current.offsetHeight;
    setH(h);

    const y = myRef.current.offsetTop;
    setY(y);


  };
  
  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);
   
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  class CardFlipOnScroll {
    constructor(wrapper, sticky, cards) {
      this.wrapper = wrapper
      this.sticky = sticky
      this.cards = cards
      this.length = cards.length

      this.start = 0
      this.end = 0
      this.step = 0
    }

    

    init() {
      this.start = y - 100
      this.end = y + h - windowSize[1] * 1.2
      this.step = (this.end - this.start) / (this.length * 2)
    }

  

    animate() {
      this.cards.forEach((card, i) => {
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)

        if (scrollPosition <= s) {
          card.style.transform = `
            perspective(100vw)
            translateX(100vw) 
            rotateY(180deg)
          `
        } else if (scrollPosition > s && scrollPosition <= e - this.step) {
          card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollPosition - s) / (e - s) * -100}vw)
            rotateY(180deg)
          `
        } else if (scrollPosition > e - this.step && scrollPosition <= e) {
          card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollPosition - s) / (e - s) * -100}vw)
            rotateY(${180 + -(scrollPosition - (e - this.step)) / this.step * 180}deg)
          `
        } else if (scrollPosition > e) {
          card.style.transform = `
            perspective(100vw)
            translateX(0vw) 
            rotateY(0deg)
          `
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      cardFlipOnScroll.animate()
    })
  }, [scrollPosition])
 
  useEffect(() => {
    window.addEventListener('resize', () => {
      cardFlipOnScroll.init()
    })
  }, [windowSize[1]])

  const mainContent1 = document.querySelector('.maincontent1')
  const sticky = document.querySelector('.sticky')
  const cards = document.querySelectorAll('.card')
  
  const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky, cards)
  cardFlipOnScroll.init()


  



  

  
  return (
    <>
    <div class = "start-screen">
      <h1>scroll Down</h1>
    </div>
   <div class = "maincontent1" ref={myRef}>
     <div class = "sticky">
       <div class="sticky-background">
         MY LIFE GOALs
       </div>
       <div class = "card-frame">
         <div class = "card">
           <div class = "front">CHICKEN</div>
           <div class = "back"> </div>
         </div>
         <div class = "card">
           <div class = "front">PINEAPPLE<br/>PIZZA</div>
           <div class = "back"> </div>
         </div>
         <div class = "card">
           <div class = "front">FISH<br/>&<br/>CHIPS</div>
           <div class = "back"> </div>
         </div>
         <div class = "card">
           <div class = "front">NOODLES</div>
           <div class = "back"> </div>
         </div>


       </div>
     </div>

   </div>
   <div class = "end-screen">
    Finish
   </div>
   </>
  )
}

export default App;
