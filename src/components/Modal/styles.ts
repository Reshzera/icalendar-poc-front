import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #333;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  min-width: 400px;
  max-width: 500px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  svg {
    font-size: 1rem;
    cursor: pointer;
  }
`;
