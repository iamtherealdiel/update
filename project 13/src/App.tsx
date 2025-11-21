import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partnership } from './components/Partnership';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Partnership />
      <Comparison />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;