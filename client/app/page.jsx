'use client'
import { useUser } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Search from "./components/Search";
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Seperator from "./components/Seperator";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if user is authenticated
  if (!user) {
    return (
      <div className="mainArea w-screen h-auto bg-primary font-display">
        <Navbar />
        <div className="mainContent pt-[70px] sm:pt-[100px]">
          <Landing />
          <Seperator />
          <About />
          <Seperator />
          <Search />
          <Feedback />
          <Footer />
        </div>
      </div>
    );
  }

  console.log(user)
  const isAdmin = user.publicMetadata?.admin === 'true';

  return (
    <div className="mainArea w-screen h-auto bg-primary font-display">
      <Navbar />
      <div className="mainContent pt-[70px] sm:pt-[100px]">
        <Landing />
        <Seperator />
        <About />
        <Seperator />
        <Search />
        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}
