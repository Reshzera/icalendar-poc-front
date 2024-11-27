import styled from "styled-components";

export const DayColumnContainer = styled.div`
  position: relative;
  overflow-y: auto;

  border-left: 1px solid #999;
`;

export const DayHours = styled.div`
  padding: 24px 8px;

  min-height: 120px;
  max-height: 120px;

  border-bottom: 1px dashed #555;

  &:last-child {
    border-bottom: none;
  }
`;

export const AppointmentsCard = styled.div`
  top: 0;
  left: 4px;
  right: 4px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  margin: 4px 0;

  border-radius: 8px;
  background-color: #4287f5;

  cursor: pointer;
  transition: background-color 0.2s;

  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
