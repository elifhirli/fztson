//sadece iskelet SVG ve ışıklı noktalar
import skeletonImage from '../../assets/svg/Skeleton_diagram.svg'; //iki klasör geri çık

const bodyRegions = [
  {
    id: 'boyun',
    label: 'Boyun',
    top: '15%',
    left: '47%',
  },
  {
    id: 'omuz',
    label: 'Omuz',
    top: '20%',
    left: '35%',
  },
  {
    id: 'bel',
    label: 'Bel',
    top: '35%',
    left: '48%',
  },
  {
    id: 'diz',
    label: 'Diz',
    top: '65%',
    left: '53%',
  },
];

function SkeletonSvg({ selectedRegion, onRegionSelect }) {
  return (
    <div className="skeleton-wrapper">
      <img
        src={skeletonImage}
        alt="İnteraktif iskelet seçici"
        className="skeleton-image"
      />

      {bodyRegions.map((region) => (
        <button
          key={region.id}
          type="button"
          className={`body-point ${selectedRegion === region.id ? 'active' : ''}`}
          style={{
            top: region.top,
            left: region.left,
          }}
          onClick={() => onRegionSelect(region.id)}
          aria-label={`${region.label} bölgesini seç`}
        >
          <span className="point-glow"></span>
          <span className="point-core"></span>
          <span className="point-label">{region.label}</span>
        </button>
      ))}
    </div>
  );
}

export default SkeletonSvg;