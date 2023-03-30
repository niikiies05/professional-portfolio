// import '../styles/globals.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologie/Technologies';
import Projects from '../components/Projects/Project';
import Services from '../components/Service/Services';
import Blog from '../components/Blog/Blog';
// import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Technologies />
            <Projects />
            <Services />
            <Blog />
            {/*<Contact />*/}
            <Footer />
        </>
    );
}
