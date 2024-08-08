import React from 'react';

import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

import "./styles.css";

const siteProps= {
  name: "Venkateswara Prasad Seeram",
  title:" Full Stack Web Developer & VLSI DV Engineer & Cloud Engineer",
  email:"venkateswaraprasad46@gmail.com",
  gitHub:"svp2234",
  linkedIn:"seeram-v-prasad-159944243?trk=contact-info",
  medium:""
};

const primaryColor="#4E567E";
const secondaryColor="#D2F1E4";

const App = () => {
  return (
    <div id='main'>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
