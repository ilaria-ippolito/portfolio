import Layout from '../components/layout/Layout';
import StackSection from '../components/sections/StackSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import AboutSection from '../components/sections/AboutSection';
import CollabSection from '../components/sections/CollabSection';
import HeroSection from '../components/sections/HeroSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects id="work-section" />
      <StackSection id="stack-section" />
      <AboutSection id="about-section" />
      <ServicesSection id="services-section" />
      <CollabSection id="collab-section" />
    </Layout>
  );
};

export default HomePage;
