import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinEvent from "./components/JoinEvent";
import AboutEvent from "./components/AboutEvent";
import ScheduleSection from "./components/ScheduleSection";
import AllSpeakers from "./components/AllSpeakers";
import PricingSection from "./components/PricingSection";
import JoinExpoSection from "./components/JoinExpoSection";
import GalleryPage from "./components/GalleryPage";
import PartnersPage from "./components/PartnersPage";
import NewsArticles from "./components/NewsArticles";
import VenueSection from "./components/VenueSection";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';




import "./css/styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <JoinEvent />
      <AboutEvent />
      <ScheduleSection />
      <AllSpeakers />
      <PricingSection />
      <JoinExpoSection />
      <GalleryPage />
      <PartnersPage />
      <NewsArticles />
      <VenueSection />
      <Footer />
     
    </div>
  );
};

export default App;
