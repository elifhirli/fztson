//seçilen bölgeyi tutar ve tedavileri gösterir
import { useRef, useState } from 'react';
import { treatments } from '../../data/treatments';
import SkeletonSvg from './SkeletonSvg';
import './AnatomySelector.css';

const regionLabels = {
  boyun: 'Boyun',
  omuz: 'Omuz',
  bel: 'Bel',
  diz: 'Diz',
};

function AnatomySelector() {
  const [selectedRegion, setSelectedRegion] = useState('boyun');
  const treatmentPanelRef = useRef(null);

  const handleRegionSelect = (regionId) => {
    setSelectedRegion(regionId);

    requestAnimationFrame(() => {
      treatmentPanelRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  const filteredTreatments = treatments.filter((treatment) =>
    treatment.regions.includes(selectedRegion)
  );

  return (
    <section id="anatomy" className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-header">
          <span className="section-badge">İnteraktif Anatomi Seçici</span>
          <h2>Ağrı veya hareket kısıtlılığı yaşadığınız bölgeyi seçin</h2>
          <p>
            Seçtiğiniz bölgeye göre ilgili hastalıklar ve fizyoterapi yaklaşımları
            listelenecektir.
          </p>
        </div>

        <div className="anatomy-layout">
          <div className="skeleton-panel">
            <SkeletonSvg
              selectedRegion={selectedRegion}
              onRegionSelect={handleRegionSelect}
            />
          </div>

          <div className="treatment-panel" ref={treatmentPanelRef}>
            <div className="selected-region-box">
              <span>Seçilen Bölge</span>
              <h3>{regionLabels[selectedRegion]}</h3>
            </div>

            <div className="treatment-list">
              {filteredTreatments.map((treatment) => (
                <article className="treatment-card" key={treatment.id}>
                  <h4>{treatment.title}</h4>
                  <p>{treatment.description}</p>
                  <a href={`#${treatment.slug}`}>Detaylı Bilgi</a>
                </article>
              ))}
            </div>

            {filteredTreatments.length === 0 && (
              <p className="empty-message">
                Bu bölge için henüz tedavi içeriği eklenmedi.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnatomySelector;
