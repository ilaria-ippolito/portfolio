import styled from 'styled-components';
import BigSvg from '../BigSvg';
import { PrimaryButton } from '../SharedStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  gap: 2rem;
  background: var(--color-neutral-700);
  color: var(--color-neutral-50);
  position: relative;
  z-index: 1;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
    height: auto;
    margin-top: 5rem;
    margin-bottom: 15rem;
    padding: 0;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100vw;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 0;
    padding-bottom: 4rem;
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
  color: var(--color-neutral-50);
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: -2rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: -1rem;
    text-align: center;
  }
`;

const HeroSubtitle = styled.span`
  text-align: left;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: var(--type-title-md);
  opacity: 0.9;
  color: var(--color-neutral-50);
  @media (max-width: 600px) {
    font-size: var(--type-title-md);
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

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <HeroSection>
      <HeroContent>
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
              onClick={(e) =>
                scrollToSection({ event: e, id: 'work-section', location, navigate })
              }
            >
              <HeroCta>guarda i miei progetti</HeroCta>
            </a>
          </HeroCtaContainer>
        </HeroText>
        <HeroSvg>
          <BigSvg />
        </HeroSvg>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
