import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #232426;
  padding: 32px;

  flex: 1;
  min-width: max-content;

  > h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const SignUpImage = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-size: 64px;
    margin-bottom: 16px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;

  button {
    padding: 12px;
    background-color: #f5f5f5;
    color: #232426;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  font-size: 12px;
  margin-top: 16px;
  align-self: center;
`;
