import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Project";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;