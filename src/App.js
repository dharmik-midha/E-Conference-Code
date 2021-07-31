import React from 'react'
import Cards from './Components/Cards'
import Crousels from './Components/Crousels.jsx'
import Header from './Components/Header'
import Homepage from './Components/Homepage.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutus from './Components/Aboutus'
import Footer from './Components/Footer'
import Missionandvision from './Components/Missionandvision'

const App = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Crousels />
      <Aboutus/>
      <Cards />
      <Missionandvision/>
      <Footer/>
    </div>
  );
}

export default App
