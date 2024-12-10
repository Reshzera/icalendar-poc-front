import React from "react";
import {
  LoginLink,
  SignUpContainer,
  SignUpForm,
  SignUpFormContainer,
  SignUpImage,
} from "./styles";
import calendarImage from "../../../assets/calendar.webp";
import Input from "../../../components/Input";
import useSignUpController from "../../controllers/SignUp/useSignUpController";
import { ThreeCircles } from "react-loader-spinner";
// import { Container } from './styles';

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors, isLoading } = useSignUpController();
  return (
    <SignUpContainer>
      <SignUpImage>
        <h1>iCalendar</h1>
        <img src={calendarImage} alt="calendar" draggable={false} />
      </SignUpImage>
      <SignUpFormContainer>
        <h1>Sing Up</h1>
        <SignUpForm onSubmit={handleSubmit}>
          <Input
            label="Name"
            error={errors.name?.message}
            {...register("name")}
          />
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
          <Input
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          <button type="submit">
            {!isLoading ? (
              "Sign Up"
            ) : (
              <ThreeCircles
                visible={true}
                height="20"
                width="20"
                color="#232426"
              />
            )}
          </button>
        </SignUpForm>
        <LoginLink to={"/login"}>
          Already have an account? <span>Login</span>
        </LoginLink>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
