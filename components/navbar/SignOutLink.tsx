"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been loged out..." });
  };
  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
