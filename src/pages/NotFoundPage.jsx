import React from 'react';
import Layout from '../components/layout/Layout';
import { GoToHome, HomeButton } from '../components/SharedStyles';

const NotFoundPage = () => (
  <Layout>
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', background: '#181818', borderRadius: '2rem', margin: '3rem auto', maxWidth: 700, padding: '2.5rem 1.5rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Pagina non trovata</h2>
      <p style={{ fontSize: '1.2rem', color: '#e0e0e0', marginBottom: '2rem', textAlign: 'center' }}>
        Oops! La pagina che cerchi non esiste o è stata spostata.<br />
        Torna alla home o scopri i progetti in evidenza!
      </p>
      <GoToHome>
        <a href="/">
          <HomeButton>← Torna alla home</HomeButton>
        </a>
      </GoToHome>
    </div>
  </Layout>
);

export default NotFoundPage;
