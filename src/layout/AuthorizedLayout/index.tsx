import React from "react";
import { AuthorizedLayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

// import { Container } from './styles';

const AuthorizedLayout: React.FC = () => {
  return (
    <AuthorizedLayoutContainer>
      <Outlet />
    </AuthorizedLayoutContainer>
  );
};

export default AuthorizedLayout;
