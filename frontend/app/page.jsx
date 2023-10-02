import { Home, About, Search, Feedback, Footer } from "./Sections/index";
import Nav from "../components/Nav";
const app = () => (
  <main>
    <Nav />

    <section id="Home" className="xl:padding-1 ">
      <Home />
    </section>

    <section id="About" className="">
      <About />
    </section>

    <section id="Search" className=" padding">
      <Search />
    </section>

    <section className="padding">
      <Feedback />
    </section>

    <section className="">
      <Footer />
    </section>
  </main>
);

export default app;
