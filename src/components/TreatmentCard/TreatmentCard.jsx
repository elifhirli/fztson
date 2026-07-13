import './TreatmentCard.css';

function TreatmentCard({ treatment }) {
  return (
    <article className="treatment-card-modern">


      <div className="treatment-card-content">
        <span className="treatment-card-category">
          {treatment.categoryLabel}
        </span>

        <h3 className="treatment-card-title">{treatment.title}</h3>

        <p className="treatment-card-description">{treatment.description}</p>

        <a href={`#${treatment.slug}`} className="treatment-card-link">
          Detayları İncele
          <span className="treatment-card-arrow">→</span>
        </a>
      </div>
    </article>
  );
}

export default TreatmentCard;