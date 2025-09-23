import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const HomePage = () => (
  <div className="min-h-screen flex flex-col bg-ghostWhite">
    <Header />
    <main className="flex-1">
      {/* Hero section */}
      <section className="above-the-fold custom-padding-x">
        <div className="above-the-fold__text">
          <h1 className="above-the-fold__title">ilaria ippolito</h1>
          <h2>
            <span className="above-the-fold__subtitle">
              <p>UX/UI designer</p>
            </span>
          </h2>
          <div className="above-the-fold__cta-container">
            <a href="#work-section">
              <button className="above-the-fold__cta">
                guarda i miei lavori
              </button>
            </a>
          </div>
        </div>
        <div className="above-the-fold__svg">
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
        </div>
      </section>

      {/* Work section */}
      <section id="work-section" className="work-section px-8 md:px-[5%] mb-20">
        <div className="highlighted-heading" style={{ display: 'inline-block' }}>
          <h3 className="section-title mb-8">i miei lavori.</h3>
        </div>
        <div className="cards__container flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
