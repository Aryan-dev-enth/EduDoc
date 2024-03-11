import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="min-h-screen w-screen bg-primary flex justify-center items-center">
        <SignIn />
    </div>
  );
}