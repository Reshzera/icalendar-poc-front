import styled from "styled-components";

export const AutoCompleteWithTagsWrapper = styled.div`
  position: relative;

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

export const AutoCompleteWithTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  background-color: #101010;
  border: 1px solid #f5f5f5;
  padding: 12px 8px;
  border-radius: 4px;

  input {
    color-scheme: dark;
    outline: none;
    border: none;
    background-color: transparent;

    color: #f5f5f5;

    &::placeholder {
      color: #f5f5f5;
    }
  }
`;

export const SelectedTags = styled.div`
  display: flex;
  align-items: center;

  padding: 4px;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #101010;

  gap: 4px;

  svg {
    cursor: pointer;
    color: #101010;
  }
`;

export const AutoCompleteWithTagsSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: #101010;

  > div {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #1e1e1e;
    }
  }
`;
