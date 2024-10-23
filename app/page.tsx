import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import AssignmentOne from './components/AssignmentOne'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
          
          <Header></Header>
          <HeroSection></HeroSection>
          <About></About>
          <AssignmentOne></AssignmentOne>
          <Footer></Footer>
             
    </div>
  )
}

export default page