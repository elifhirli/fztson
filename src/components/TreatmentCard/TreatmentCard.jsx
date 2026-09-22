import './TreatmentCard.css';

function TreatmentCard({ treatment }) {
  return (
    <a
      href={`/tedaviler/${treatment.slug}`}
      className="treatment-card-modern"
      aria-label={`${treatment.title} detaylarını görüntüle`}
    >
      <div className="treatment-card-icon" aria-hidden="true">+</div>
      <h3 className="treatment-card-title">{treatment.title}</h3>
      <p className="treatment-card-description">{treatment.description}</p>
      <span className="treatment-card-link">
        Detayları Görüntüle
        <span className="treatment-card-arrow" aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export default TreatmentCard;
