import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js';

import Navbar from './Navbar'
import exploreBtn from '../images/explore-btn.png' 
import underline from '../images/underline.png'

const Banner = () => {

  const element = useRef(null);
 
  useEffect(() => {
    const typed =  new Typed(element.current, { 
      strings: ["Art", "Community", "Engagement"], 
      typedSpeed: 200, 
      backSpeed: 100, 
      loop: true
    });
 
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="banner">
      <Navbar />
      <div className="homeContent">
        <div className="left"></div>
        <div className="right">
          <div className="homeTitle">
            <span ref={element}></span>
            <img className="underline" src={underline} alt="Underline" />
          </div>
          <div className="homeSubTitle">
            <p>We are looking for anime aficionados to build a vibrant and enjoyable community. We will shortly introduce our NFT collection, which will offer our holders useful utilities and passive income.</p>
            <p>Join our anime revolution, dominate the scene! Own 3333 mind-blowing NFTs, unlock greatness, and redefine the community!. Unleash 3333 NFTS in the space. Unlock greatness. Become the new anime revolution</p>
            <Link to="/about"><img className="exploreBtn" src={exploreBtn} alt="Explore More" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner