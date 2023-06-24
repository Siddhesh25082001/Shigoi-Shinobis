import React from 'react'
import { Link } from 'react-router-dom'

import discordBtn from '../images/discord-btn.png'
import twitterBtn from '../images/twitter-btn.png'
import akairoBtn from '../images/akairo-btn.png'

const Community = () => {
  return (
    <section id="community">
      <div className="communityContent">
        <div className="communityTitle">
          <p>Join our community</p>
        </div>
        <div className="btnContainer">
          <Link to="https://discord.gg/gba7NXetBG" className="btn" target='_blank'>
            <img src={discordBtn} alt="Twitter Handle" />
            <span>Discord</span>
          </Link>
          <Link to="https://twitter.com/SugoiShinobiNFT" className="btn" target='_blank'>
            <img src={twitterBtn} alt="Twitter Handle" />
            <span>Twitter</span>
          </Link>
          <Link to="https://www.theakairostore.com" className="btn" target='_blank'>
            <img src={akairoBtn} alt="Twitter Handle" />
            <span>The Akairo Store</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Community