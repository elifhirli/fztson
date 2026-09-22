import './Header.css';

function Header(){
    return(
        <header id="top" className='site-header'>
            <div className='header-container'>
                <a href="/" className='logo'>
                Fizyoterapist Seyit Han Hırlı</a>
            
            <nav className='nav-menu' aria-label="Ana Menü">
                <a href="/#about">Hakkımda</a>
                <a href="/#anatomy">Anatomi Seçici</a>
                <a href="/#treatments">Tedaviler</a>
            </nav>
            <a href="/#contact" className='contact-button'>Bize Ulaşın</a>
            </div>
        </header>
    );
}

export default Header;
