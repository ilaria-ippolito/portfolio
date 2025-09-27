import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import BigSvg from '../components/BigSvg';
import { PrimaryButton } from '../components/SharedStyles';
import StackSection from '../components/sections/StackSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import AboutSection from '../components/sections/AboutSection';
import CollabSection from '../components/sections/CollabSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
    height: auto;
    margin-top: 5rem;
    margin-bottom: 15rem;
    padding: 0;
  }
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  animation: reveal-left 1.5s ease-out;
  @media (max-width: 600px) {
    flex: none;
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  color: #000;
  font-size: 5.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: -2rem;
  @media (max-width: 600px) {
    font-size: 4rem;
    margin-bottom: -1rem;
    text-align: center;
  }
`;

const HeroSubtitle = styled.span`
  text-align: left;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 3.5rem;
  opacity: 0.9;
  color: #000;
  @media (max-width: 600px) {
    font-size: 2.5rem;
    text-align: center;
  }
  p {
    margin: 0;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

const HeroSvg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: reveal-right 1.5s ease-out;
  @media (max-width: 600px) {
    flex: none;
    width: 100%;
    svg {
      max-height: 350px;
      transform: scale(0.7);
    }
  }
`;

const HeroCtaContainer = styled.div``;

const HeroCta = PrimaryButton;


const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex-1">
        <HeroSection>
          <HeroText>
            <HeroTitle>ilaria ippolito</HeroTitle>
            <h2>
              <HeroSubtitle>
                <p>UX/UI designer</p>
              </HeroSubtitle>
            </h2>
            <HeroCtaContainer>
              <a
                href="#work-section"
                onClick={e => scrollToSection({ event: e, id: 'work-section', location, navigate })}
              >
                <HeroCta>guarda i miei progetti</HeroCta>
              </a>
            </HeroCtaContainer>
          </HeroText>
          <HeroSvg>
            <BigSvg />
          </HeroSvg>
        </HeroSection>
        <FeaturedProjects id="work-section" />
        <StackSection id="stack-section" />
        <AboutSection id="about-section" />
        <ServicesSection id="services-section" />
        <CollabSection id="collab-section" />
      </div>
    </Layout>
  );
};

export default HomePage;
