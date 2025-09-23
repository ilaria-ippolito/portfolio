import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// Styled-components for Work section
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

const HighlightedHeading = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: #e5e5e5;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  padding-left: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000000;
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

const HeroCta = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #e260d9;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.3rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
  }
  &:hover {
    background-color: #da34cf;
    transform: translateY(-2px);
  }
`;

const HomePage = () => (
  <div className="min-h-screen flex flex-col bg-ghostWhite">
    <Header />
    <main className="flex-1">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 800"
            opacity="1"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="gggyrate-grad"
              >
                <stop
                  stopColor="hsl(132, 95%, 55%)"
                  stopOpacity="1"
                  offset="0%"
                />
                <stop
                  stopColor="hsl(304, 69%, 63%)"
                  stopOpacity="1"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g strokeWidth="5.5" stroke="url(#gggyrate-grad)" fill="none">
              <polygon points="400,122.125 29.5,677.875 770.5,677.875" opacity="1.00" />
              <polygon points="400,136.75 49,663.25 751,663.25" opacity="0.95" />
              <polygon points="400,151.375 68.5,648.625 731.5,648.625" opacity="0.89" />
              <polygon points="400,166 88,634 712,634" opacity="0.84" />
              <polygon points="400,180.625 107.5,619.375 692.5,619.375" opacity="0.79" />
              <polygon points="400,195.25 127,604.75 673,604.75" opacity="0.74" />
              <polygon points="400,209.875 146.5,590.125 653.5,590.125" opacity="0.68" />
              <polygon points="400,224.5 166,575.5 634,575.5" opacity="0.63" />
              <polygon points="400,239.125 185.5,560.875 614.5,560.875" opacity="0.58" />
              <polygon points="400,253.75 205,546.25 595,546.25" opacity="0.53" />
              <polygon points="400,268.375 224.5,531.625 575.5,531.625" opacity="0.47" />
              <polygon points="400,283 244,517 556,517" opacity="0.42" />
              <polygon points="400,297.625 263.5,502.375 536.5,502.375" opacity="0.37" />
              <polygon points="400,312.25 283,487.75 517,487.75" opacity="0.31" />
              <polygon points="400,326.875 302.5,473.125 497.5,473.125" opacity="0.26" />
              <polygon points="400,341.5 322,458.5 478,458.5" opacity="0.21" />
              <polygon points="400,356.125 341.5,443.875 458.5,443.875" opacity="0.16" />
              <polygon points="400,370.75 361,429.25 439,429.25" opacity="0.10" />
              <polygon points="400,385.375 380.5,414.625 419.5,414.625" opacity="0.05" />
            </g>
          </svg>
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
    </main>
    <Footer />
  </div>
);

export default HomePage;
