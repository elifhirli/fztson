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
  { id: 'lenfodem', label: 'Lenfödem' },
  { id: 'lipodem', label: 'Lipödem' },
  { id: 'aletli-pilates', label: 'Aletli Pilates' },
  { id: 'pelvik-taban', label: 'Pelvik Taban' },
];

const selectedRegionStorageKey = 'fztson-selected-anatomy-region';

function getInitialRegion() {
  try {
    const storedRegion = window.sessionStorage.getItem(selectedRegionStorageKey);

    if (storedRegion === 'all') return null;
    if (bodyRegions.some((region) => region.id === storedRegion)) return storedRegion;
  } catch {
    // Depolama erişimi kapalıysa varsayılan bölge kullanılmaya devam eder.
  }

  return 'boyun';
}

function AnatomySelector() {
  const [selectedRegion, setSelectedRegion] = useState(getInitialRegion);
  const treatmentsRef = useRef(null);

  const showTreatments = (regionId) => {
    setSelectedRegion(regionId);

    try {
      window.sessionStorage.setItem(selectedRegionStorageKey, regionId ?? 'all');
    } catch {
      // Depolama erişimi kapalıysa seçim yalnızca mevcut sayfada korunur.
    }

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
