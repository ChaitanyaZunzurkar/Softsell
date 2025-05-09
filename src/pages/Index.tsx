
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

interface IndexProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Index = ({ isDarkMode, toggleDarkMode }: IndexProps) => {
  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
