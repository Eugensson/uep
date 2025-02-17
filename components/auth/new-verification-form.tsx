"use client";

import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { CardWrapper } from "@/components/auth/card-wrapper";

import { newVerification } from "@/actions/new-verification";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      title="Verification Email"
    >
      <div className="w-full flex justify-center items-center">
        {!success && !error && <Loader size={44} className="animate-spin" />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
