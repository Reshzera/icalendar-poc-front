import React from "react";
import { SplashScreenContainer } from "./styles";
import { ThreeCircles } from "react-loader-spinner";

// import { Container } from './styles';

const SplashScreen: React.FC = () => {
  return (
    <SplashScreenContainer>
      <ThreeCircles visible={true} height="40" width="40" color="#ffffff" />
    </SplashScreenContainer>
  );
};

export default SplashScreen;
