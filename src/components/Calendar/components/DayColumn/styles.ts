import styled from "styled-components";

export const DayColumnContainer = styled.div`
  position: relative;
  overflow-y: hidden;

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

type PositionProps = {
  top: number;
  height: number;
};

export const AppointmentsCard = styled.div<PositionProps>`
  top: ${({ top }) => top}%;
  height: ${({ height }) => height}%;
  min-height: max-content;
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
  overflow: hidden;
`;

export const AppointmentHour = styled.div`
  font-size: 14px;
  width: 100%;
  margin-top: 8px;
`;

export const AppointmentLabel = styled.div`
  font-size: 14px;
  width: 100%;
  font-weight: bold;
  color: #fff;
`;
