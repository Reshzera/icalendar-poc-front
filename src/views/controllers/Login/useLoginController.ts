import { useForm } from "react-hook-form";
import { LoginFormData, loginFormResolver } from "./loginFormValidation";
import authModule from "../../../services/modules/authModule";
import useAuth from "../../../hooks/useAuth";

export default function useLoginController() {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: loginFormResolver,
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { accessToken } = await authModule.login({
        email: data.email,
        password: data.password,
      });

      signin(accessToken);
    } catch {
      setError("password", {
        type: "manual",
        message: "Invalid Credentials",
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
