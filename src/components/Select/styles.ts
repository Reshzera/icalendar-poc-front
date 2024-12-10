import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: max-content;
`;

export const StyledSelect = styled.select`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-right: 12px solid #333;

  option {
    background-color: #333;
    color: #fff;
  }
`;
