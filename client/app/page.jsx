'use client'
import { useUser } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Search from "./components/Search";
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Feedback from "./components/Feedback";
import Seperator from "./components/Seperator";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if user is authenticated
  if (!user) {
    return (
      <div className="container w-screen h-auto bg-primary overflow-hidden">
        <Navbar />
        <div className=" container pt-[70px] sm:pt-[100px] overflow-hidden">
          <Landing />
          <Seperator />
          <About />
          <Seperator />
          <Search />
          <Feedback />
          
        </div>
      </div>
    );
  }

  console.log(user)
  const isAdmin = user.publicMetadata?.admin === 'true';

  return (
    <div className=" w-screen h-auto bg-primary">
      <Navbar />
      <div className=" pt-[70px] sm:pt-[100px]">
        <Landing />
        <Seperator />
        <About />
        <Seperator />
        <Search />
        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        <Feedback />
      </div>
    </div>
  );
}
