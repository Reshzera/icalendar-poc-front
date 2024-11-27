import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;

  position: sticky;
  top: 50px;
  background-color: #101010;
  z-index: 1;
`;

type NavigationButtonProps = {
  position: "left" | "right";
};

export const NavigationButton = styled.button<NavigationButtonProps>`
  margin-right: ${(props) => (props.position === "left" ? "auto" : "0")};
  margin-left: ${(props) => (props.position === "right" ? "auto" : "0")};

  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  line-height: 0px;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0;

  &:hover {
    color: #555;
  }
`;
