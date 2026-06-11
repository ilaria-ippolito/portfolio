import styled from 'styled-components';

export const HighlightedHeading = styled.div`
  display: inline-block;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
  color: var(--color-neutral-700);
`;

export const CustomPaddingX = styled.section`
  width: min(100%, var(--container-max));
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 3rem);
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
    color: var(--color-primary-500);
    margin-top: 2px;
  }
`;

export const SurfaceCard = styled.div`
  background: var(--color-neutral-0);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  min-height: 48px;
  background: var(--color-neutral-0);
  border: 2px solid var(--color-neutral-700);
  color: var(--color-neutral-700);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  padding: 0.8rem 1.25rem;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    border-color 0.18s,
    transform 0.18s,
    box-shadow 0.18s;

  &:hover,
  &:focus-visible {
    background-color: var(--color-surface-tint);
    border-color: var(--color-neutral-700);
    color: var(--color-neutral-700);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  min-height: 48px;
  background: var(--color-primary-700);
  color: white;
  padding: 0.8rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    background 0.18s,
    transform 0.18s,
    box-shadow 0.18s;
  font-size: 1rem;

  &:hover,
  &:focus-visible {
    background: var(--color-primary-500);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }
`;

export const PrimaryLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  min-height: 48px;
  background: var(--color-primary-700);
  color: var(--color-accent-50);
  padding: 0.8rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  transition:
    background 0.18s,
    transform 0.18s,
    box-shadow 0.18s;

  &:hover,
  &:focus-visible {
    background: var(--color-primary-500);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }
`;

export const Tag = styled.span`
  font-size: var(--type-body-sm);
  color: var(--color-primary-700);
  background: var(--color-primary-50);
  border: 1px solid var(--color-border-accent);
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  line-height: 1;
`;

export const TagSmall = styled.span`
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-primary-700);
  background: var(--color-primary-50);
  border: 1px solid var(--color-border-accent);
  padding: 0.35rem 0.6rem;
  border-radius: var(--radius-pill);
  line-height: 1;
`;
