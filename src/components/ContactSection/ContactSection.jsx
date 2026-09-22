import './ContactSection.css';

const contactItems = [
  { label: 'Adres', value: 'Cebrail, Simsar Sk. Şaşmaz İş Merkezi No:19, 37200 Kastamonu Merkez/Kastamonu', icon: '⌖' },
  { label: 'Telefon', value: '0554 368 90 60', icon: '⌕', href: 'tel:+9005543689060' },
  { label: 'E-posta', value: 'fzt.seyit@gmail.com', icon: '✉', href: 'mailto:fzt.seyit@gmail.com' },
];

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>İletişime Geçin</h2>
        <ul className="contact-list">
          {contactItems.map((item) => (
            <li key={item.label}>
              <span className="contact-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong>{item.label}</strong>
                {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
              </div>
            </li>
          ))}
        </ul>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8076089848614!2d33.774820176833764!3d41.37826449655985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084f1cdacab5427%3A0xd716f8e75546ec6e!2sFizyoterapist%20Seyit%20Han%20H%C4%B1rl%C4%B1!5e0!3m2!1str!2str!4v1785005136823!5m2!1str!2str"
            title="Fizyoterapist Seyit Han Hırlı klinik konumu"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
