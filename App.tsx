
import React from 'react';
import Slideshow from './components/Slideshow';
import { SLIDES_DATA } from './constants/slides';

const App: React.FC = () => {
  return (
    <main className="relative h-screen w-screen bg-black text-white font-sans overflow-hidden">
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-white mix-blend-difference">
          2050年の イオン北海道って
        </h1>
      </header>
      
      <Slideshow slides={SLIDES_DATA} interval={5000} />

      <footer className="absolute bottom-0 right-0 p-6 md:p-8 z-10">
        <p className="text-sm text-white mix-blend-difference">A Glimpse into the Future</p>
      </footer>
    </main>
  );
};

export default App;
