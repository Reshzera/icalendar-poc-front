import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: #f5f5f5;
  }

  span {
    font-size: 12px;
    color: #ff5959;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  input {
    color-scheme: dark;
    outline: none;
    border: 1px solid #f5f5f5;

    padding: 12px 8px;

    border-radius: 4px;
    width: 100%;

    color: #f5f5f5;
    background-color: #101010;
  }
`;
