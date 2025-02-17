import { Suspense } from "react";
import { Loader } from "lucide-react";

import { NewVerificationForm } from "@/components/auth/new-verification-form";

const NewVerificationPage = () => {
  return (
    <Suspense fallback={<Loader size={44} className="animate-spin" />}>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
