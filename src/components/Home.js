import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-wrapper'>
      <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>

    <div className="hero">
      <div className="hero-text">
        <h2>Your Favorite Food, Delivered While Coding</h2>

        <Link to="/pizza"><button id="order-pizza">Pizza?</button></Link>
      </div>
    </div>

    </div>
  )
}

export default Home