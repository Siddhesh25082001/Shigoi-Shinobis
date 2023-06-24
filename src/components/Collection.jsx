import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Astra from '../images/astra.png'
import Volaris from '../images/volaris.png'
import Avalan from '../images/avalan.png'
import underline from '../images/underline.png'

const Collection = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="collection">
      <div className="collectionContent">
        <div className="left"></div>
        <div className="right">
          <div className="collectionTitle">
            <p>Begin Your Journey</p>
            <img className="underline" src={underline} alt="Underline" />
          </div>
          <div className="slider">
            <Slider {...settings}>

              <div className='slideItem'>
                <div className="clanHeading">
                  <p className="clanTitle">Astra</p>
                  <p className="clanSubTitle">Determination - Cunning - Mystic</p>
                </div>  
                <div className="clanInfo">
                  <div className="left">
                    <p>Unleashing their inner catalyst, the Avalan awakens the dormant magic in others. With perfect balance and merging mystic power with shinobi skills, these unique beasts tap into their ethereal intuition, navigating the arcane with grace.</p>
                    <p>As a noble guardian, protect realms magical and mundane. Embrace the Mystic Vanguard, where legends are born, forging a path of enchantment and leaving an indelible mark on the world.</p>
                  </div>
                  <div className="right">
                    <img src={Astra} alt="Clan Avatar" />
                  </div>
                </div>  
              </div>

              <div className='slideItem'>
                <div className="clanHeading">
                  <p className="clanTitle">Volaris</p>
                  <p className="clanSubTitle">Courage - Grace - Mastery</p>
                </div>  
                <div className="clanInfo">
                  <div className="left">
                    <p>Becoming one with elemental harmony and striking with lightning-fast precision, the warrior clan Volaris has mastered the art of wind-wielding warfare. Their disciplined approach to combat allows them to swiftly neutralise opponents with clean and effective techniques</p>
                    <p>With meticulous precision, their strikes hit the mark, delivering devastating blows that take their enemies by storm. Join the ranks of Volaris and soar to new heights as you master the art of wind-wielding warfare. Embrace the grace of the tempest and leave your mark as a true warrior of the wind</p>
                  </div>
                  <div className="right">
                    <img src={Volaris} alt="Clan Avatar" />
                  </div>
                </div>  
              </div>

              <div className='slideItem'>
                <div className="clanHeading">
                  <p className="clanTitle">Avalan</p>
                  <p className="clanSubTitle">Versatile - Catalyst - Intuitive</p>
                </div>  
                <div className="clanInfo">
                  <div className="left">
                    <p>Unleashing their inner catalyst, the Avalan awakens the dormant magic in others. With perfect balance and merging mystic power with shinobi skills, these unique beasts tap into their ethereal intuition, navigating the arcane with grace.</p>
                    <p>As a noble guardian, protect realms magical and mundane. Embrace the Mystic Vanguard, where legends are born, forging a path of enchantment and leaving an indelible mark on the world.</p>
                  </div>
                  <div className="right">
                    <img src={Avalan} alt="Clan Avatar" />
                  </div>
                </div>  
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection