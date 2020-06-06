import React, { FC } from 'react';
import WorldStats from './components/WorldStats';
import CountryStats from './components/CountryStats';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactGA from 'react-ga';

const trackingId = "UA-161713714-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview('/');
const App: FC = () => {
  return (
    <div className="min-h-screen p-4 md:flex md:justify-center md:items-center">
      <div className="md:w-10/12 lg:w-8/12">
        <Header/>
        <CountryStats />
        <WorldStats />
        <Footer />
      </div>
    </div>
  )
}

export default App;
