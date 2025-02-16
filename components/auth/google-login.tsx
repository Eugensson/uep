"use client";

import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";

import { Button } from "@/components/ui/button";

import { googleAuthenticate } from "@/actions/google-login";

export const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  );

  return (
    <form className="flex mt-4" action={dispatchGoogle}>
      <Button
        variant="outline"
        className="flex flex-row items-center gap-3 w-full"
      >
        <BsGoogle />
        Sign In with Google
      </Button>
      <p className="text-destructive">{errorMsgGoogle}</p>
    </form>
  );
};
