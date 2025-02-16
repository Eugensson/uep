import { Metadata } from "next";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Enter in system",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
