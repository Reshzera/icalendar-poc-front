import React from "react";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginImage,
  SignUpLink,
} from "./styles";
import calendarImage from "../../../assets/calendar.webp";
import Input from "../../../components/Input";
import useLoginController from "../../controllers/Login/useLoginController";
import { ThreeCircles } from "react-loader-spinner";
// import { Container } from './styles';

const Login: React.FC = () => {
  const { register, handleSubmit, errors, isLoading } = useLoginController();
  return (
    <LoginContainer>
      <LoginImage>
        <h1>iCalendar</h1>
        <img src={calendarImage} alt="calendar" draggable={false} />
      </LoginImage>
      <LoginFormContainer>
        <h1>Login</h1>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />

          <button type="submit">
            {!isLoading ? (
              "Login"
            ) : (
              <ThreeCircles
                visible={true}
                height="20"
                width="20"
                color="#232426"
              />
            )}
          </button>
        </LoginForm>
        <SignUpLink to={"/signup"}>Create an account</SignUpLink>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
