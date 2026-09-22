import { useRef, useState } from 'react';
import SkeletonSvg from './SkeletonSvg';
import TreatmentsSection from '../TreatmentSection/TreatmentSection';
import './AnatomySelector.css';

const bodyRegions = [
  { id: 'cene', label: 'Çene' },
  { id: 'boyun', label: 'Boyun' },
  { id: 'omuz', label: 'Omuz' },
  { id: 'omurga', label: 'Omurga' },
  { id: 'bel', label: 'Bel ve Sırt' },
  { id: 'kalca', label: 'Kalça' },
  { id: 'dirsek', label: 'Dirsek' },
  { id: 'diz', label: 'Diz' },
  { id: 'el-bilek', label: 'El & Bilek' },
  { id: 'ayak-bilek', label: 'Ayak & Bilek' },
];

function AnatomySelector() {
  const [selectedRegion, setSelectedRegion] = useState('boyun');
  const treatmentsRef = useRef(null);

  const showTreatments = (regionId) => {
    setSelectedRegion(regionId);
    requestAnimationFrame(() => {
      treatmentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="anatomy" className="anatomy-section">
      <div className="anatomy-container">
        <header className="anatomy-header">
          <h2>İnteraktif Anatomi Seçici</h2>
          <p>
            Rahatsızlık hissettiğiniz bölgeyi iskelet üzerinden seçerek size özel
            tedavi ve hastalık bilgilerine anında ulaşabilirsiniz.
          </p>
        </header>

        <div className="anatomy-layout">
          <div className="skeleton-panel">
            <SkeletonSvg
              selectedRegion={selectedRegion}
              onRegionSelect={showTreatments}
            />
          </div>

          <div className="region-grid" aria-label="Vücut bölgesi seçimi">
            {bodyRegions.map((region) => (
              <button
                key={region.id}
                type="button"
                className={`region-button ${
                  selectedRegion === region.id ? 'active' : ''
                }`}
                onClick={() => showTreatments(region.id)}
                aria-pressed={selectedRegion === region.id}
              >
                <span>{region.label}</span>
                <span className="region-arrow" aria-hidden="true">›</span>
              </button>
            ))}

            <button
              type="button"
              className="show-all-button"
              onClick={() => showTreatments(null)}
            >
              Tümünü Göster
            </button>
          </div>
        </div>

        <TreatmentsSection
          selectedRegion={selectedRegion}
          sectionRef={treatmentsRef}
        />
      </div>
    </section>
  );
}

export default AnatomySelector;
