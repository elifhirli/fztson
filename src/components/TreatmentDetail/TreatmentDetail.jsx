import { useEffect, useState } from 'react';
import { getTreatmentDetail } from '../../data/diseases';
import './TreatmentDetail.css';

function TreatmentDetail({ slug }) {
  const treatment = getTreatmentDetail(slug);
  const [activeApproach, setActiveApproach] = useState('conservative');
  const homeUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    if (!treatment) return undefined;

    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');

    document.title = treatment.seo.title;
    metaDescription?.setAttribute('content', treatment.seo.description);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        metaDescription?.setAttribute('content', previousDescription);
      }
    };
  }, [treatment]);

  if (!treatment) {
    return (
      <main className="treatment-detail-page">
        <div className="detail-not-found">
          <span>İçerik bulunamadı</span>
          <h1>Aradığınız hastalık sayfasına ulaşılamadı.</h1>
          <a href={`${homeUrl}#treatments`}>Hastalıklar ve Tedavilere Dön</a>
        </div>
      </main>
    );
  }

  const selectedApproach = treatment.approaches[activeApproach];

  return (
    <main className="treatment-detail-page">
      <section className="detail-hero">
        <div className="detail-container detail-hero-layout">
          <div className="detail-hero-content">
            <a className="detail-back-link" href={`${homeUrl}#treatments`}>
              <span aria-hidden="true">←</span> Hastalıklar ve Tedaviler
            </a>
            <span className="detail-region-label">{treatment.regionLabel}</span>
            <h1>{treatment.title}</h1>
            <p>{treatment.shortDescription}</p>
          </div>

          <div className={`detail-hero-visual detail-hero-visual-${treatment.region}`}>
            <div
              className="detail-hero-image"
              role="img"
              aria-label={treatment.heroImageAlt}
              style={{
                backgroundImage: `url(${JSON.stringify(treatment.heroImage)})`,
              }}
            />
            <span>{treatment.regionLabel}</span>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-container">
          <span className="detail-section-number">01</span>
          <h2>{treatment.title} Nedir?</h2>
          <p className="detail-overview">{treatment.overview}</p>
        </div>
      </section>

      <section className="detail-section detail-section-muted">
        <div className="detail-container">
          <div className="detail-section-heading">
            <div>
              <span className="detail-section-number">02</span>
              <h2>Yaygın Şikâyetler</h2>
            </div>
            <p>Şikâyetler herkeste aynı biçimde veya aynı şiddette görülmeyebilir.</p>
          </div>

          <ul className="symptom-grid">
            {treatment.symptoms.map((symptom, index) => (
              <li key={symptom}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {treatment.showApproaches && (
        <section className="detail-section">
          <div className="detail-container">
            <span className="detail-section-number">03</span>
            <h2>Fizyoterapi Yaklaşımları</h2>
            <p className="detail-section-intro">
              Uygun yaklaşım; değerlendirme bulguları, sağlık ekibinin yönlendirmesi
              ve kişinin ihtiyaçları birlikte ele alınarak planlanabilir.
            </p>

            <div className="approach-tabs" role="tablist" aria-label="Fizyoterapi yaklaşımı seçin">
              {Object.entries(treatment.approaches).map(([key, approach]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeApproach === key}
                  aria-controls="approach-panel"
                  className={activeApproach === key ? 'active' : ''}
                  onClick={() => setActiveApproach(key)}
                >
                  {approach.label}
                </button>
              ))}
            </div>

            <div
              id="approach-panel"
              className="approach-panel"
              role="tabpanel"
              tabIndex="0"
            >
              <span className="approach-mark" aria-hidden="true">+</span>
              <div>
                <h3>{selectedApproach.title}</h3>
                <p>{selectedApproach.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="detail-section detail-section-process">
        <div className="detail-container">
          <span className="detail-section-number">
            {treatment.showApproaches ? '04' : '03'}
          </span>
          <h2>Süreç Nasıl İlerler?</h2>

          <ol className="process-list">
            {treatment.processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-info-section">
        <div className="detail-container">
          <div className="detail-disclaimer" role="note">
            <span aria-hidden="true">i</span>
            <div>
              <h2>Bilgilendirme Notu</h2>
              <p>{treatment.disclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="detail-container detail-cta-layout">
          <div>
            <span>Size Özel Değerlendirme</span>
            <h2>Fizyoterapi süreciniz hakkında bilgi alın.</h2>
            <p>
              Şikâyetlerinize uygun fizyoterapi süreci hakkında bilgi almak için
              iletişime geçebilirsiniz.
            </p>
          </div>
          <a href={`${homeUrl}#contact`}>İletişime Geç <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </main>
  );
}

export default TreatmentDetail;
