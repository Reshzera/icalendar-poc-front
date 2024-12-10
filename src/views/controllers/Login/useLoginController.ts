import { useForm } from "react-hook-form";
import { LoginFormData, loginFormResolver } from "./loginFormValidation";
import authModule from "../../../services/modules/authModule";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";

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

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: (data: LoginFormData) => authModule.login(data),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { accessToken } = await login(data);

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
    isLoading: isPending,
  };
}
