import { Suspense } from "react";
import { Loader } from "lucide-react";

import { NewPasswordForm } from "@/components/auth/new-password-form";

const NewPasswordPage = () => {
  return (
    <Suspense fallback={<Loader size={44} className="animate-spin" />}>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
