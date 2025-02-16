"use client";

import { useCallback } from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  const handleLogout = useCallback(() => {
    signOut({ callbackUrl: "/" });
  }, []);

  return <Button onClick={handleLogout}>Logout</Button>;
};
