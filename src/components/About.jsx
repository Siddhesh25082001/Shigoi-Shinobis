import React from 'react'

import logo from '../images/logo.png'
import aboutGIF from '../images/about-gif.gif'

const About = () => {
    return (
        <section id="about">
            <div className="aboutContent">
                <div className="left">
                    <img src={logo} alt="Sugoi Shinobis Logo" />
                    <div className="aboutTitle">
                        <p>Unleashing Anime Agency</p>
                    </div>
                    <div className="aboutSubTitle">
                        <p>Greetings from the Sugoi Shinobis, a tribe of unstoppable warriors destined for greatness!</p>
                        <p>Our mission? To conquer the anime industry and empower the next generation.</p>
                        <p>As fierce warriors, we build a thriving space for collaboration. With innovation and determination, we redefine anime, delivering value to our holders. Join our epic journey, revolutionising the Indian anime world for generations.</p>
                    </div>
                </div>
                <div className="right">
                    <img src={aboutGIF} alt="Sugoi Shinobis GIF" />
                </div>
            </div>
        </section>
    )
}

export default About