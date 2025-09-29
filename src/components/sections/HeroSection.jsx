import { PrimaryButton } from '../SharedStyles';
import styled, { keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 3rem 1rem;
  color: var(--color-neutral-700);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  color: var(--color-neutral-700);

  @media (max-width: 1300px) {
    font-size: 9rem;
  }

  @media (max-width: 900px) {
    font-size: 7rem;
  }
  @media (max-width: 600px) {
    font-size: 4.5rem;
  }
`;

const reveal = keyframes`
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`;

const Subtitle = styled.div`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0.9;
  color: var(--color-neutral-700);
  margin: 1rem 0 2.5rem 0;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: ${reveal} 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Section>
      <Title>ilaria ippolito</Title>
      <Subtitle>UX/UI designer</Subtitle>
      <a
        href="#work-section"
        onClick={(e) => scrollToSection({ event: e, id: 'work-section', location, navigate })}
        style={{ textDecoration: 'none' }}
      >
        <PrimaryButton>guarda i miei progetti</PrimaryButton>
      </a>
    </Section>
  );
};

export default Hero;
