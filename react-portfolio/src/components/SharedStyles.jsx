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
`;

export const GoToHome = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
`;

export const HomeButton = styled.button`
  background: none;
  border: 2px solid #f920ce;
  color: #f920ce;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 2rem;
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  transition: none;
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e260d9;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: none;
  font-size: 1.3rem;
  /* hover disabled */
`;

export const PrimaryLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e260d9;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  /* hover disabled */
`;

export default {};
