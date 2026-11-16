import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AnatomySelector from './components/AnatomySelector/AnatomySelector';
import AboutExpertise from './components/AboutExpertise/AboutExpertise';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import TreatmentDetail from './components/TreatmentDetail/TreatmentDetail';
function App(){
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    const pathname = window.location.pathname.replace(basePath, '') || '/';
    const detailMatch = pathname.match(/^\/tedaviler\/([^/]+)\/?$/);
    const isDetailPage = Boolean(detailMatch);

    useEffect(() => {
        if (isDetailPage || !window.location.hash) return;

        const targetId = decodeURIComponent(window.location.hash.slice(1));
        const firstFrame = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
            });
        });

        return () => cancelAnimationFrame(firstFrame);
    }, [isDetailPage]);

    if (detailMatch) {
        return (
            <>
                <Header/>
                <TreatmentDetail slug={decodeURIComponent(detailMatch[1])}/>
                <Footer/>
            </>
        );
    }

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
