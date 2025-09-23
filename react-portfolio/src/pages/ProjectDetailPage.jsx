import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaItem from '../components/MetaItem';
import ProcessStep from '../components/ProcessStep';
import Section from '../components/Section';

const meta = [
  { label: 'Cliente:', value: 'Start2impact' },
  { label: 'Anno:', value: '2024' },
  { label: 'Ruolo:', value: 'UX/UI Designer' },
  { label: 'Strumenti:', value: 'Figma, HTML, CSS' },
];

const processSteps = [
  {
    number: 1,
    label: 'Ricerca e analisi',
    desc: 'Analisi del sito esistente, benchmark di competitor, raccolta di feedback dagli utenti.',
  },
  {
    number: 2,
    label: 'Wireframing',
    desc: 'Creazione di wireframe a bassa fedeltà per definire la nuova struttura del sito.',
  },
  {
    number: 3,
    label: 'Prototyping',
    desc: 'Sviluppo di prototipi interattivi ad alta fedeltà per testare la user experience.',
  },
  {
    number: 4,
    label: 'Sviluppo',
    desc: 'Implementazione del sito con HTML e CSS, ottimizzazione per l’accessibilità.',
  },
];

const results = [
  'Miglioramento dell’accessibilità e della navigazione per utenti con disabilità visive.',
  'Incremento del punteggio Lighthouse Accessibility da 60 a 100.',
  'Sito responsive e ottimizzato per dispositivi mobili.',
];

const ProjectDetailPage = () => (
  <div className="project-details">
    <Header />
    <main>
      <div className="go-to-home">
        <a href="/">
          <button className="above-the-fold__cta">← Torna alla home</button>
        </a>
      </div>
      <section className="custom-padding-x mb-5">
        <div className="project-header">
          <img
            src="assets/img/copertina-accessibilità.png"
            alt="Copertina progetto accessibilità"
            className="project-hero"
          />
          <div className="project-meta">
            {meta.map((item, i) => (
              <MetaItem key={i} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
        <div className="project-content">
          <div className="project-section">
            <Section title="Processo.">
              {processSteps.map((step, i) => (
                <ProcessStep key={i} {...step} />
              ))}
            </Section>
          </div>
          <div className="project-section">
            <Section title="Risultati.">
              <ul>
                {results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </Section>
          </div>
          <div className="project-section">
            <a
              href="assets/documents/progetto-accessibilità.pdf"
              className="project-pdf-link above-the-fold__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scarica il progetto completo (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>

);

export default ProjectDetailPage;
