import React from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="p-3 px-5 flex justify-between shadow-md bg-background">
      <Link to="/">
        <img src="/logo.png" width={80} height={80} alt="Logo" />
      </Link>
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}
