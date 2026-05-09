import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { GoToHome, SecondaryButton } from '../components/SharedStyles';

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-neutral-700)',
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-300)',
        borderRadius: 'var(--radius-lg)',
        margin: '5rem auto',
        maxWidth: 720,
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>404</h1>
      <h2 style={{ fontWeight: 700, marginBottom: '1rem' }}>Page not found</h2>
      <p
        style={{
          fontSize: '1.05rem',
          color: 'var(--color-neutral-500)',
          marginBottom: '1.5rem',
          lineHeight: 1.7,
        }}
      >
        The page you're looking for doesn't exist or may have moved. You can head back to the
        homepage and continue browsing the portfolio.
      </p>
      <GoToHome>
        <a href="/" style={{ textDecoration: 'none' }}>
          <SecondaryButton as="span">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </SecondaryButton>
        </a>
      </GoToHome>
    </div>
  </Layout>
);

export default NotFoundPage;
