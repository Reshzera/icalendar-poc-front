import { useForm } from "react-hook-form";
import { signUpFormData, signUpFormResolver } from "./signUpFormValidation";
import authModule from "../../../services/modules/authModule";
import useAuth from "../../../hooks/useAuth";
import userModule from "../../../services/modules/userModule";

export default function useSignUpController() {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: signUpFormResolver,
  });

  const onSubmit = async (data: signUpFormData) => {
    try {
      await userModule.createUser({
        email: data.email,
        password: data.password,
        name: data.name,
      });

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
