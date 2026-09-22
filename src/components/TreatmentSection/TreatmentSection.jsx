import { useMemo, useState } from 'react';
import { treatments } from '../../data/diseases';
import TreatmentCard from '../TreatmentCard/TreatmentCard';
import './TreatmentSection.css';

const regionLabels = {
  cene: 'Çene',
  boyun: 'Boyun',
  omuz: 'Omuz',
  omurga: 'Omurga',
  bel: 'Bel ve Sırt',
  kalca: 'Kalça',
  dirsek: 'Dirsek',
  diz: 'Diz',
  'el-bilek': 'El ve Bilek',
  'ayak-bilek': 'Ayak ve Bilek',
};

function TreatmentsSection({ selectedRegion, sectionRef }) {
  const [query, setQuery] = useState('');

  const visibleTreatments = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('tr-TR');

    return treatments.filter((treatment) => {
      const matchesRegion = !selectedRegion || treatment.region === selectedRegion;
      const matchesQuery = !normalizedQuery
        || `${treatment.title} ${treatment.description}`
          .toLocaleLowerCase('tr-TR')
          .includes(normalizedQuery);

      return matchesRegion && matchesQuery;
    });
  }, [query, selectedRegion]);

  const selectedRegionLabel = selectedRegion ? regionLabels[selectedRegion] : null;

  return (
    <section id="treatments" className="treatments-section" ref={sectionRef}>
      <div className="treatments-header-row">
        <div className="treatments-header">
          <h2>Hastalıklar &amp; Tedaviler</h2>
          <p>
            {selectedRegionLabel
              ? `${selectedRegionLabel} bölgesine yönelik fizyoterapi yaklaşımlarını inceleyin.`
              : 'Tüm bölgeler için fizyoterapi ve rehabilitasyon alanlarını inceleyin.'}
          </p>
        </div>

        <label className="treatment-search">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <span className="visually-hidden">Hastalık veya tedavi ara</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hastalık veya tedavi ara..."
          />
        </label>
      </div>

      {visibleTreatments.length > 0 ? (
        <div className="treatments-grid">
          {visibleTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      ) : (
        <div className="treatments-empty">
          {query
            ? 'Aramanızla eşleşen bir hastalık bulunamadı.'
            : 'Bu bölge için içerikler yakında eklenecek.'}
        </div>
      )}
    </section>
  );
}

export default TreatmentsSection;
