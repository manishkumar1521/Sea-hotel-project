import React from 'react';
import Hero from '../components/Hero';
import ResortStory from '../components/ResortStory';
import YachtExperience3D from '../components/YachtExperience3D';
import FeaturedRooms from '../components/FeaturedRooms';
import ExperienceShowcase from '../components/ExperienceShowcase';
import Highlights from '../components/Highlights';
import SpecialOffers from '../components/SpecialOffers';
import Testimonials from '../components/Testimonials';
import InstagramGallery from '../components/InstagramGallery';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      <Hero />
      <ResortStory />
      <YachtExperience3D />
      <FeaturedRooms />
      <ExperienceShowcase />
      <Highlights />
      <SpecialOffers />
      <Testimonials />
      <InstagramGallery />
      <FAQSection />
    </div>
  );
};

export default Home;