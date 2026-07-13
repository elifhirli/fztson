import { treatments } from '../../data/treatments';
import TreatmentCard from '../TreatmentCard/TreatmentCard';
import './TreatmentSection.css';

function TreatmentsSection() {
  return (
    <section id="treatments" className="treatments-section">
      <div className="treatments-container">
        <div className="treatments-header">
          <span className="section-badge">Tedaviler</span>
          {/* <h2>Hastalıklar & Tedaviler</h2>
          <p>
            Size uygun tedavi alanlarını inceleyebilir, detaylı bilgiye hızlıca
            ulaşabilirsiniz.
          </p> */}
        </div>

        {/* <div className="treatments-grid">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default TreatmentsSection;