import styled from 'styled-components';
import Layout from '../components/Layout';
import Card from '../components/Card';
import BigSvg from '../components/BigSvg';
import {
  HighlightedHeading,
  SectionTitle,
  PrimaryButton,
} from '../components/SharedStyles';

const WorkSection = styled.section`
  padding: 2rem 0;
  margin-bottom: 5rem;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;


const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  gap: 2rem;
  padding: 0 5rem;
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

const HomePage = () => (
    <Layout>
      <div className="flex-1">
      {/* Hero section */}
      <HeroSection>
        <HeroText>
          <HeroTitle>ilaria ippolito</HeroTitle>
          <h2>
            <HeroSubtitle>
              <p>UX/UI designer</p>
            </HeroSubtitle>
          </h2>
          <HeroCtaContainer>
            <a href="#work-section">
              <HeroCta>
                guarda i miei lavori
              </HeroCta>
            </a>
          </HeroCtaContainer>
        </HeroText>
        <HeroSvg>
          <BigSvg />
        </HeroSvg>
      </HeroSection>

      {/* Work section */}
      <WorkSection id="work-section">
        <HighlightedHeading>
          <SectionTitle>i miei lavori.</SectionTitle>
        </HighlightedHeading>
        <CardsContainer>
          <Card
            href="/project-detail?project=orizon"
            imgSrc="assets/img/copertina-progetto-grafica.jpg"
            imgAlt="Copertina Orizon"
            title="Orizon"
            description={"Creazione di una brand identity per un'agenzia di viaggi ecosostenibile."}
            tags={[
              'Adobe Illustrator',
              'Adobe Photoshop',
              'Affinity Designer',
              'Affinity Publisher',
            ]}
          />
          <Card
            href="/project-detail?project=ivegan_discovery"
            imgSrc="assets/img/copertina-discovery.png"
            imgAlt="Copertina iVegan Discovery"
            title="iVegan Discovery"
            description={'Analisi as is e ricerca utente per un brand di prodotti vegetali.'}
            tags={[
              'User Experience Design',
              'User Research',
              'Journey Mapping',
              'Information Architecture',
            ]}
          />
          <Card
            href="/project-detail?project=ivegan_a11y"
            imgSrc="assets/img/copertina-accessibilità.png"
            imgAlt="Copertina iVegan Analisi Accessibilità"
            title="iVegan Accessibilità"
            description={'Ricerca dei bisogni di persone con disabilità.'}
            tags={['WCAG', 'Inclusive Design', 'WAVE Evaluation', 'NVDA/Talkback Testing']}
          />
        </CardsContainer>
      </WorkSection>
      </div>
    </Layout>
);

export default HomePage;
