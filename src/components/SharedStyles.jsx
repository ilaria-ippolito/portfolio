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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 2px solid var(--color-primary-500);
  color: var(--color-primary-500);
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: var(--radius-lg);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;

  &:hover,
  &:focus-visible {
    background-color: var(--color-primary-700);
    color: var(--color-accent-50);
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary-500);
  background-image: radial-gradient(circle at 50% 50%, var(--color-primary-700) 0%, var(--color-primary-700) 40%, transparent 41%);
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: color 0.18s;
  font-size: 1.3rem;
  position: relative;
  overflow: hidden;

  /* Remove ::before pseudo-element, use background instead */

  /* No ::before hover needed */

  &:hover,
  &:focus-visible {
    color: white;
    background-size: 250% 250%;
    background-position: 50% 50%;
    transition: background-size 0.4s cubic-bezier(0.4,0,0.2,1), color 0.18s;
  }

  > * {
    position: relative;
    z-index: 1;
    color: inherit;
  }
`;

export const PrimaryLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary-500);
  background-image: radial-gradient(circle at 50% 50%, var(--color-primary-700) 0%, var(--color-primary-700) 40%, transparent 41%);
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  color: var(--color-accent-50);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transition: color 0.18s;

  &:hover,
  &:focus-visible {
    color: var(--color-accent-50);
    background-size: 250% 250%;
    background-position: 50% 50%;
    transition: background-size 0.4s cubic-bezier(0.4,0,0.2,1), color 0.18s;
  }

  > * {
    position: relative;
    z-index: 1;
    color: inherit;
  }
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
