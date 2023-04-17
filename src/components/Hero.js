import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../assets/images/Hero.svg'
const Hero = () => {
  return (
    <header className='hero '>
      <section className='section-center hero-center'>
        <article className='hero-info'>
          <div className='hero-header'>
            <h4>DIGITAL MEDIA AGENCY</h4>
            <h2>We Boost Your Website Traffic</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              soluta praesentium enim laudantium, eaque nisi cumque quas nulla
              quibusdam neque ipsum animi molestias, qui aliquam quos?
              Reprehenderit, ducimus! Distinctio, temporibus!
            </p>
          </div>
          <button className='btn'>Contact Us</button>
        </article>
        <img className='hero-img' src={HeroImg} alt='' />
      </section>
    </header>
  )
}

export default Hero
