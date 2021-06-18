import React from 'react'
import { Link } from "react-router-dom"
import Row from './Row'


function Home() {
  return (
    <>
      <div className="Home-container">
        <div className="hero">
          <div className="hero-text">
            <h2>Your Favorite Food, Delivered While Coding</h2>
            <Link to="/pizza" id="order-pizza">Pizza?</Link>
          </div>
        </div>

        <section>
          <div className="Middle-section-title"><h2>Best Delivery in Gotham City</h2></div>
            <Row />
            <Row />
            <Row />
        </section>
      </div>
    </>
  )
}

export default Home;