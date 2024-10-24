import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/features';



const App: React.FC = () => {
  return( 

    <div>
    <Navbar /> 
    <Hero/>
    <Feature/>
    </div>
  );
};

export default App;

