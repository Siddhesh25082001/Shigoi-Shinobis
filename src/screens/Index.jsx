import React from 'react'

import Banner from '../components/Banner'
import About from '../components/About'
import Collection from '../components/Collection'
import Community from '../components/Community'

const Index = () => {
  return (
    <div className="index">
      <Banner />
      <About />
      <Collection />
      <Community />
    </div>
  )
}

export default Index