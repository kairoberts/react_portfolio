import React from 'react';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ImageLinks from './components/ImageLinks';
import Filler from './components/Filler';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <ImageLinks />
      <Clients />
      <Filler />
      <About />
      <Filler />
      <Portfolio />
      <Filler />
      <Testimonials />
      <Filler />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

