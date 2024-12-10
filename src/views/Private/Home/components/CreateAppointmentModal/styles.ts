import styled from "styled-components";

export const CreateAppointmentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > button.submit {
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

  > button.delete {
    padding: 12px;
    background-color: #ff5959;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
