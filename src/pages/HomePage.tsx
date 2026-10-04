import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GitHubCTA from "../components/GitHubCTA/GitHubCTA";



function HomePage() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <FeaturedProjects />
        <GitHubCTA />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;