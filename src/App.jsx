import React from 'react'
import Header from "./components/header/Header"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"
import Experience from "./components/experiences/Experiences"
export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App
