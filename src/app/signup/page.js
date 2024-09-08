import HookMultiStepForm from "@/components/hook-multi-step";
import Link from "next/link";


export const metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign Up Page for Startup Nextjs Template",
  // other metadata
};

const SignupPage = () => {
  return (
    <div className="px-28 ">
   
    <HookMultiStepForm />
    </div>
  );
};

export default SignupPage;
