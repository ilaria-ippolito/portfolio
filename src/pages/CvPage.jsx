import Layout from '../components/Layout';
import Experience from '../components/Experience';
import Section from '../components/Section';
import Skill from '../components/Skill';
import styled from 'styled-components';
import {
  HighlightedHeading,
  SectionTitle,
  CustomPaddingX,
  GoToHome,
  HomeButton,
} from '../components/SharedStyles';

const AboutMeSection = styled.section`
  display: flex;
  margin-top: 10rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  @media (max-width: 1024px) {
    margin: 0 0 6rem 0;
  }
`;

const ProfilePicture = styled.img`
  width: 35rem;
  height: 35rem;
  border-radius: 500px;
  @media (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 600px) {
    width: 25rem !important;
    height: 25rem !important;
  }
`;

const AboutMeContainer = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 12rem;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    margin: 0 2.5rem !important;
  }
`;

const AboutMeTitle = styled.h3`
  font-size: 4rem;
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
`;

const AboutMeDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
  line-height: 1.5;
  b, a {
    color: #f920ce;
  }
`;

const NewSection = styled.section`
  margin-bottom: 5rem;
`;

const NewSectionGrid = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 0 2rem 0 0;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 2rem;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;



// using CustomPaddingX from SharedStyles

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`;

// using GoToHome and HomeButton from SharedStyles

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
    <Layout>
      <GoToHome>
        <a href="/">
          <HomeButton>← Torna alla home</HomeButton>
        </a>
      </GoToHome>
      {/* About me */}
      <CustomPaddingX className="mb-5">
        <AboutMeSection id="about-me">
        <ProfilePictureContainer>
          <ProfilePicture
            src="assets/img/avatar.webp"
            alt="profile"
          />
        </ProfilePictureContainer>
        <AboutMeContainer>
          <AboutMeTitle>chi sono.</AboutMeTitle>
          <AboutMeDescription>
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
          </AboutMeDescription>
        </AboutMeContainer>
        </AboutMeSection>
      </CustomPaddingX>
      <CustomPaddingX>
        <NewSection>
        <NewSectionGrid>
          <LeftColumn>
            <div className="up">
              <HighlightedHeading>
                <SectionTitle>Formazione.</SectionTitle>
              </HighlightedHeading>
              {education.map((exp, i) => (
                <Experience key={i} {...exp} />
              ))}
              <HighlightedHeading>
                <SectionTitle>Skills.</SectionTitle>
              </HighlightedHeading>
              <SkillsContainer>
                {skills.map((skill, i) => (
                  <Skill key={i}>{skill}</Skill>
                ))}
              </SkillsContainer>
            </div>
          </LeftColumn>
          <RightColumn>
            <HighlightedHeading>
              <SectionTitle>Esperienze.</SectionTitle>
            </HighlightedHeading>
            {workExperiences.map((exp, i) => (
              <Experience key={i} {...exp} />
            ))}
          </RightColumn>
        </NewSectionGrid>
        </NewSection>
      </CustomPaddingX>
    </Layout>
);

export default CvPage;
