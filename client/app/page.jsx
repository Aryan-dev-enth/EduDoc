import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Search from "./components/Search";
import CardContainer from "./components/CardContainer";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Seperator from "./components/Seperator";

export default function Home() {
  return (
    <div className="mainArea w-screen h-auto bg-primary font-display">
      <Navbar />
      <div className="mainContent pt-[70px] sm:pt-[100px]">
        <Landing />
        <Seperator />
        <About />
        <Seperator />
        <Search />
        <CardContainer />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}
