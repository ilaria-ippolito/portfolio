import styled from 'styled-components';

export const HighlightedHeading = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
`;

export const CustomPaddingX = styled.section`
  padding: 0 5rem;
    @media (max-width: 600px) {
      padding: 0 1rem;
  }
`;

export const GoToHome = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
`;

export const HomeButton = styled.button`
  background: none;
  border: 2px solid var(--color-primary-500);
  color: var(--color-primary-500);
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: var(--radius-lg);
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  transition: none;
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary-500);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: none;
  font-size: 1.3rem;
`;

export const PrimaryLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary-500);
  color: var(--color-accent-50);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const Tag = styled.span`
  font-size: 0.78rem;
  color: var(--color-accent-50);
  background: var(--color-primary-500);
  padding: 0.22rem 0.6rem;
  border-radius: var(--radius-md);
  line-height: 1;
  box-shadow: var(--shadow-sm);
`;
