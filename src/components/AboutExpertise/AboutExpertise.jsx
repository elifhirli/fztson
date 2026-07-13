import './AboutExpertise.css';

const expertiseAreas = [
  'Omurga Cerrahisi',
  'Spor Yaralanmaları',
  'Artroskopik Cerrahi',
  'Eklem Protezleri',
  'Pediatrik Ortopedi',
  'Travma Cerrahisi',
];

function AboutExpertise() {
  return (
    <section className="about-expertise">
      <div id="expertise" className="expertise-band">
        <div className="expertise-container">
          <div className="expertise-heading">
            <h2>Uzmanlık<br />Alanları</h2>
            <span aria-hidden="true"></span>
          </div>

          <ul className="expertise-list">
            {expertiseAreas.map((area) => (
              <li key={area}>
                <span className="expertise-check" aria-hidden="true">✓</span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="about" className="about-area">
        <span className="about-decoration" aria-hidden="true"></span>
        <div className="about-container">
          <div className="about-content">
            <h2>Dr. Seyit Han Hırlı Kimdir?</h2>
            <p>
              Tıp eğitimini tamamladıktan sonra ortopedi ve travmatoloji alanında
              uzmanlaşan Dr. Seyit Han Hırlı, kariyeri boyunca binlerce başarılı
              operasyona imza atmıştır.
            </p>
            <p>
              Özellikle omurga hastalıkları ve protez cerrahisi üzerine yoğunlaşan
              çalışmalarıyla tanınan Dr. Hırlı, güncel tedavi yöntemlerini
              hastalarına sunmaktadır.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutExpertise;
