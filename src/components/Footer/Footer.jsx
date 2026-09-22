import './Footer.css';

const legalLinks = [
  { label: 'Gizlilik Politikası', href: '#gizlilik-politikasi' },
  { label: 'KVKK Aydınlatma Metni', href: '#kvkk' },
  { label: 'Site Haritası', href: '#site-haritasi' },
];

function Footer() {
  const homeUrl = import.meta.env.BASE_URL;
  const quickLinks = [
    { label: 'Hakkımda', href: `${homeUrl}#about` },
    { label: 'Tedaviler', href: `${homeUrl}#anatomy` },
    { label: 'İletişim', href: `${homeUrl}#contact` },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="footer-logo" href={`${homeUrl}#top`}>Fizyoterapist Seyit Han Hırlı</a>
            <p>
              Bu site bilgilendirme amaçlıdır, sağlık hizmeti vermez. Tanı ve
              tedavi için uygun sağlık uzmanına danışınız.
            </p>

            <div className="footer-socials">
              <a href="tel:+905343689060" aria-label="Telefon ile iletişime geçin">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.7 3.5 9.4 7c.4.5.3 1.2-.2 1.6l-1.4 1.1c1 2.2 2.6 3.8 4.8 4.8l1.1-1.4c.4-.5 1.1-.6 1.6-.2l3.5 2.7c.5.4.6 1 .3 1.5l-1.2 2c-.4.6-1.1 1-1.8.9C9.6 19.2 4.7 14.3 3.9 7.8c-.1-.7.3-1.4.9-1.8l2-1.2c.5-.3 1.1-.2 1.5.3" />
                </svg>
              </a>
              <a href="mailto:fzt.seyit@gmail.com" aria-label="E-posta gönderin">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6.5h16v11H4z" />
                  <path d="m5 7.5 7 5 7-5" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-column" aria-label="Footer hızlı menü">
            <h2>Hızlı Menü</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Yasal bağlantılar">
            <h2>Yasal</h2>
            <ul>
              {legalLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Fizyoterapist Seyit Han Hırlı — Tüm Hakları Saklıdır.</p>
          <p>Modern Medical UI Design</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
