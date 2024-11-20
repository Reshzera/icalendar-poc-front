import { createContext, useCallback, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LocalStorageKeys } from "../constants/localstorage";
import { toast } from "react-toastify";
import userModule from "../services/modules/userModule";
import { UserFromApi } from "../services/types/user";

interface AuthContextValue {
  signedIn: boolean;
  user: UserFromApi | undefined;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      LocalStorageKeys.SESSION_USER
    );

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => userModule.getCurrentUser(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.SESSION_USER, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(LocalStorageKeys.SESSION_USER);
    queryClient.clear();

    setSignedIn(false);
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou!");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        user: data,
        signin,
        signout,
      }}
    >
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
