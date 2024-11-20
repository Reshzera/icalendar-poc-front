import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes";
import GlobalStyle from "./styles/global";

// import { Container } from './styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <ToastContainer />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
