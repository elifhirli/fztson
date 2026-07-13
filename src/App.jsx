import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AnatomySelector from './components/AnatomySelector/AnatomySelector';
import AboutExpertise from './components/AboutExpertise/AboutExpertise';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
function App(){
    return(
        <>
        <Header/>
        <Hero/>
        <AnatomySelector/>
        <AboutExpertise/>
        <main>


            <ContactSection/>

                 
        </main>
        <Footer/>

        </>
    );
}
export default App;
