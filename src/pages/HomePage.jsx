import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import AboutSection from '../components/sections/AboutSection';
import CollabSection from '../components/sections/CollabSection';
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects id="projects-section" />
      <ServicesSection id="skills-section" />
      <AboutSection id="about-section" />
      <CollabSection id="contact-section" />
    </Layout>
  );
};

export default HomePage;
