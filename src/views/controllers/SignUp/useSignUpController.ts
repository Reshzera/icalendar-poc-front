import { useForm } from "react-hook-form";
import { signUpFormData, signUpFormResolver } from "./signUpFormValidation";
import authModule from "../../../services/modules/authModule";
import useAuth from "../../../hooks/useAuth";
import userModule from "../../../services/modules/userModule";
import { useMutation } from "@tanstack/react-query";

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

  const { mutateAsync: createUser, isPending: isCreateUserPending } =
    useMutation({
      mutationFn: (data: signUpFormData) => userModule.createUser(data),
    });

  const { mutateAsync: login, isPending: isLoginPending } = useMutation({
    mutationFn: (data: signUpFormData) => authModule.login(data),
  });

  const onSubmit = async (data: signUpFormData) => {
    try {
      await createUser(data);
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
    isLoading: isCreateUserPending || isLoginPending,
  };
}
