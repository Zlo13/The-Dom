import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import AnimationScreen from './AnimationScreen/AnimationScreen'

const Home = () => {
  return(
    <>
      <AnimationScreen/>
      <h2 className='home'>Home page</h2>
      <Footer/>
    </>

  )
}

export default Home