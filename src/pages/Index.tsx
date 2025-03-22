
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import PageTransition from '@/components/layout/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <FeaturedEvents />
    </PageTransition>
  );
};

export default Index;
