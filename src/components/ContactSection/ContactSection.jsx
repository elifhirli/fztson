import './ContactSection.css';

const contactItems = [
  {
    label: 'Adres',
    value: 'Cebrail, Simsar Sk. Şaşmaz İş Merkezi No:19, 37200 Kastamonu Merkez/Kastamonu',
    icon: '⌖',
  },
  {
    label: 'Telefon',
    value: '0554 368 90 60',
    icon: '⌕',
    href: 'tel:+9005543689060',
  },
  {
    label: 'E-posta',
    value: 'iletisim@seyithanhirli.com',
    icon: '✉',
    href: 'mailto:iletisim@seyithanhirli.com',
  },
];

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-details">
          <h2>İletişime Geçin</h2>

          <ul className="contact-list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span className="contact-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="contact-map" aria-label="Klinik konumu: Kastamonu, Merkez">
            <span className="map-pin" aria-hidden="true">●</span>
            <div className="map-label">
              <strong>Dr. Seyit Han Hırlı</strong>
              <span>Kastamonu, Merkez</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Ad Soyad</label>
              <input id="contact-name" name="name" type="text" placeholder="Adınız" required />
            </div>

            <div className="form-field">
              <label htmlFor="contact-phone">Telefon</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="Telefon Numaranız" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">Konu</label>
            <select id="contact-subject" name="subject" defaultValue="Genel Muayene">
              <option>Genel Muayene</option>
              <option>Fizyoterapi</option>
              <option>Ortopedik Değerlendirme</option>
              <option>Ameliyat Sonrası Kontrol</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Mesajınız</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Size nasıl yardımcı olabiliriz?"
              required
            ></textarea>
          </div>

          <button type="submit">Mesaj Gönder</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
