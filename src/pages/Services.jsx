import React from 'react';
import Photography from '../components/Photography';
import GraphicDesign from '../components/GraphicDesign';

const Services = () => {
  return (
    <section id='services' className='grid grid-cols-1 lg:grid-cols-2'>
      <GraphicDesign />
      <Photography /> 
    </section>
  );
}

export default Services;
