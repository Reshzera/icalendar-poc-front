import React from "react";
import useAuth from "../../../hooks/useAuth";
import { HomeContainer } from "./styles";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { user, signout } = useAuth();
  return (
    <HomeContainer>
      <h1>Welcome {user?.name}</h1>
      <button onClick={signout}>Sair</button>
    </HomeContainer>
  );
};

export default Home;
