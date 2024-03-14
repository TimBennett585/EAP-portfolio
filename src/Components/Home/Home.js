import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Erika Pugh, PhD
        </h1>
        <p>A brief introduction to your areas of expertise and what visitors can expect to find on your website. </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
