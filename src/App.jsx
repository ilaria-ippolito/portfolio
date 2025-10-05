import React, { Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid var(--color-primary-500, #e260d9);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-detail" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
