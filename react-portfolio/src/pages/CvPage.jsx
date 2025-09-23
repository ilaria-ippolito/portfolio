import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Section from '../components/Section';
import Skill from '../components/Skill';


const education = [
  {
    title: 'Start2impact | Master UX / UI Design',
    date: 'Sett 2024 - In Corso',
    description: 'Discovery, wireframing, HTML & CSS, Prototyping, user testing',
  },
  {
    title: 'PhotoLux | Fotografia',
    date: 'Ott 2022 - Feb 2022',
    description: 'Diploma in fotografia di base.',
  },
  {
    title: 'Università degli Studi di Pisa | Laurea triennale',
    date: '2019',
    description: 'Laurea triennale in Discipline dello Spettacolo e della Comunicazione',
  },
  {
    title: 
      
      "Accademia d'Arte Bianca Cappello | Diploma",
    date: '2015',
    description: 'Diploma in illustrazione',
  },
];

const skills = [
  'Discovery',
  'Wireframing',
  'HTML - CSS',
  'UX - UI Design',
  'Prototyping',
  'User testing',
];

const workExperiences = [
  {
    title: 'Giulio Martini Servizi Aziendali | Impiegata Amministrativa',
    date: 'Giu 2023 - Ott 2024',
    description:
      'Gestione Front office e Back office, gestione mailing, inserimento e analisi dati .',
  },
  {
    title: 'Logilux | Assistente concorsuale',
    date: 'Set 2020 - Ott 2020',
    description:
      "Mi sono occupata dell’organizzazione e della vigilanza durante i test di ammissione universitari svolti presso le sedi dell’Università di Pisa.",
  },
  {
    title: 'Lucca Film Festival | Tirocinio',
    date: 'Apr 2019',
    description:
      'Stage universitario in cui ho lavorato come fotografa e reporter, al fine di creare contenuti per il sito web e per i profili social presso gli eventi del festival.',
  },
];

const CvPage = () => (
  <div className="wrapper">
    <Header />
  <main style={{ marginBottom: '4rem' }}>
      <div className="go-to-home">
        <a href="/">
          <button className="above-the-fold__cta">← Torna alla home</button>
        </a>
      </div>
      {/* About me */}
      <section id="about-me" className="about-me custom-padding-x mb-5">
        <div className="profile-picture-container">
          <img
            src="assets/img/avatar.webp"
            alt="profile"
            className="profile-picture-container__img"
          />
        </div>
        <div className="about-me-container">
          <h3 className="about-me-title">chi sono.</h3>
          <div className="about-me-description">
            <p>
              <b>Ilaria</b>, aspirante <b>UX/UI Designer</b>, con una vena creativa che mi accompagna da sempre. <br />
              <br />
              Mi piace osservare il mondo che mi circonda e lasciarmi ispirare dall'<b>arte</b>, passando volentieri interi pomeriggi tra cinema e mostre. <br />
              <br />
              Ho dovuto mettere da parte le mie vocazioni e inclinazioni per esigenze lavorative, accettando ruoli che non rispecchiavano pienamente chi sono.
              <br />
              <br />A 28 anni, ho deciso di dare una svolta alla mia carriera frequentando un <b>master in UX/UI Design su <a className="custom-link" target="_blank" rel="noopener noreferrer" href="https://www.start2impact.it/">Start2impact.</a></b>
              <br />
              <br />
              Non vedo l'ora di mettere in pratica le competenze acquisite e sono entusiasta di iniziare questa nuova avventura!
            </p>
          </div>
        </div>
      </section>
      <section className="new-section custom-padding-x mb-5">
        <div className="new-section__grid">
          <div className="left-column">
            <div className="up">
              <Section title="Formazione.">
                {education.map((exp, i) => (
                  <Experience key={i} {...exp} />
                ))}
              </Section>
              <Section title="Skills.">
                <div className="skills">
                  {skills.map((skill, i) => (
                    <Skill key={i}>{skill}</Skill>
                  ))}
                </div>
              </Section>
            </div>
          </div>
          <div className="right-column d-flex">
            <Section title="Esperienze.">
              {workExperiences.map((exp, i) => (
                <Experience key={i} {...exp} />
              ))}
            </Section>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CvPage;
