import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 auto;
  max-width: 1400px;

  padding: 2rem;

  gap: 2rem;
`;

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HomeLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    font-size: 2rem;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const HomeDescription = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export const HomeMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const LogoutButton = styled.button`
  outline: none;
  border: none;
  background-color: #f44336;
  color: #fff;

  font-size: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const CreateAppointmentButton = styled.button`
  
`
