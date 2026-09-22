import './AboutExpertise.css';

const focusAreas = [
  'Kişiye Özel Değerlendirme',
  'Manuel Terapi',
  'Kişiye Özel Egzersiz',
];

function AboutExpertise() {
  return (
    <section id="about" className="about-area">
      <div className="about-container">
        <header className="about-heading">
          <span className="about-eyebrow">Hakkımda</span>
          <h2>Fizyoterapist <br />Seyit Han Hırlı</h2>
          <span className="about-heading-line" aria-hidden="true" />
        </header>

        <div className="about-content">
          <p className="about-lead">
            Kişiye özel değerlendirme, manuel terapi ve egzersiz yaklaşımıyla
            yaşam kalitesini desteklemek.
          </p>
          <p>
            Süleyman Demirel Üniversitesi Fizyoterapi ve Rehabilitasyon
            Bölümü&apos;nden mezun oldum. Mesleki gelişim sürecimde çeşitli manuel
            terapi ve egzersiz eğitimlerini tamamladım.
          </p>
          <p>
            Sizlere daha iyi hizmet sunabilmek amacıyla değerlendirme sürecini
            her zaman kişiye özel planlıyor; manuel terapi tekniklerini ve
            egzersiz programlarını bireysel ihtiyaçlara göre şekillendiriyorum.
            Hedefim, hareket kapasitenizi ve yaşam kalitenizi bir üst seviyeye
            taşımaktır.
          </p>

          <ul className="about-focus-list" aria-label="Çalışma alanları">
            {focusAreas.map((area) => (
              <li key={area}>
                <span aria-hidden="true">✓</span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutExpertise;
