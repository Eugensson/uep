import { Metadata } from "next";

import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Create new account",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
