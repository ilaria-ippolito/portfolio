import styled from 'styled-components';

export const HighlightedHeading = styled.div`
  display: inline-block;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
`;

export const CustomPaddingX = styled.section`
  padding: 0 25rem;

  @media (max-width: 2000px) {
    padding: 0 15rem;
  }

  @media (max-width: 1800px) {
    padding: 0 10rem;
  }

  @media (max-width: 1500px) {
    padding: 0 5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const GoToHome = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
`;

export const CheckMarkBullets = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;
  color: ${({ color }) => color || 'var(--color-neutral-50)'};
  font-size: var(--type-body-sm);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    margin: 0;
    line-height: 1.5;
  }

  svg {
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
    color: var(--color-success); /* green check */
    margin-top: 2px;
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 2px solid var(--color-primary-700);
  color: var(--color-primary-700);
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s;

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
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--color-primary-700) 0%,
    var(--color-primary-700) 40%,
    transparent 41%
  );
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
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
    transition:
      background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.18s;
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
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--color-primary-700) 0%,
    var(--color-primary-700) 40%,
    transparent 41%
  );
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  color: var(--color-accent-50);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
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
    transition:
      background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.18s;
  }

  > * {
    position: relative;
    z-index: 1;
    color: inherit;
  }
`;

export const Tag = styled.span`
  font-size: var(--type-body);
  color: var(--color-accent-50);
  background: var(--color-primary-700);
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-pill);
  line-height: 1;
`;

export const TagSmall = styled.span`
  font-size: var(--type-body-sm);
  color: var(--color-primary-50);
  background: var(--color-primary-700);
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-pill);
  line-height: 1;
`;
