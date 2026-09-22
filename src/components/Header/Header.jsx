import './Header.css';

function Header(){
    const homeUrl = import.meta.env.BASE_URL;

    return(
        <header id="top" className='site-header'>
            <div className='header-container'>
                <a href={homeUrl} className='logo'>
                Fizyoterapist Seyit Han Hırlı</a>
            
            <nav className='nav-menu' aria-label="Ana Menü">
                <a href={`${homeUrl}#about`}>Hakkımda</a>
                <a href={`${homeUrl}#anatomy`}>Anatomi Seçici</a>
                <a href={`${homeUrl}#treatments`}>Tedaviler</a>
            </nav>
            <a href={`${homeUrl}#contact`} className='contact-button'>Bize Ulaşın</a>
            </div>
        </header>
    );
}

export default Header;
