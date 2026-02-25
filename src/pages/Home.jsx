import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Courses from "../components/sections/Courses";
import Results from "../components/sections/Results";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import EnquiryForm from "../components/sections/EnquiryForm";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Courses />
                <Results />
                <WhyChooseUs />
                <Testimonials />
                <EnquiryForm />

            </main>

            <Footer />
        </>
    );
}

export default Home;