import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { NavigationButton, NavigationContainer } from "./styles";

// import { Container } from './styles';

type NavigationProps = {
  label: string;
  navigate: (direction: "next" | "prev") => void;
};

const Navigation: React.FC<NavigationProps> = ({ label, navigate }) => {
  return (
    <NavigationContainer>
      <NavigationButton position="left" onClick={() => navigate("prev")}>
        <BiChevronLeft />
      </NavigationButton>
      <label>{label}</label>
      <NavigationButton position="right" onClick={() => navigate("next")}>
        <BiChevronRight />
      </NavigationButton>
    </NavigationContainer>
  );
};

export default Navigation;
