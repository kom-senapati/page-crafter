// src/components/SignOut.tsx
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const SignOut: React.FC = () => {
  const [location, setLocation] = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLocation("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOut;
