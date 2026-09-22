import './Hero.css';
 
function Hero(){
    return(
        <section className='hero-section'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <span className='hero-badge'>Fizyoterapi & Rehabilitasyon</span>
                    <h1>
                       
                        <span className='hero-title-line'></span>
                        <span>Fizyoterapist Seyit Han Hırlı</span>
                    </h1>
                    <ol className='hero-list'>
                        <li>menisküs</li>
                        <li>menisküs</li>
                    </ol>

                    <div className='hero-actions'>
                        <a href='#treatments' className='primary-button'>
                            Tedavileri Keşfet
                        </a>

                        <a href='#contact' className='secondary-button'>
                            İletişime Geç
                        </a>
                        
                    </div>
                </div>
                
                <div className='hero-image-wrapper'>
                    <img
                        src="/src/assets/images/seyit.png"
                        alt="Fizyoterapist Seyit Han Hırlı klinikte çalışırken"
                        className='hero-image' 
                    />
                    
                    <div className='hero-info'>
                        <strong>Kişiye Özel Yaklaşım</strong>
                        <span>Değerlendirme ve ihtiyaçlara göre planlama</span>              
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;
