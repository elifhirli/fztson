import skeletonImage from '../../assets/svg/Skeleton_diagram.svg';

const bodyRegions = [
  { id: 'cene', label: 'Çene', top: '18%', left: '48%' },
  { id: 'boyun', label: 'Boyun', top: '23%', left: '48%' },
  { id: 'omuz', label: 'Omuz', top: '25%', left: '59%' },
  { id: 'omurga', label: 'Omurga', top: '31%', left: '48%' },
  { id: 'bel', label: 'Bel ve Sırt', top: '38%', left: '47.5%' },
  { id: 'kalca', label: 'Kalça', top: '44%', left: '45%' },
  { id: 'dirsek', label: 'Dirsek', top: '36%', left: '68%' },
  { id: 'diz', label: 'Diz', top: '63%', left: '39%' },
  { id: 'el-bilek', label: 'El ve Bilek', top: '44%', left: '17%' },
  { id: 'ayak-bilek', label: 'Ayak ve Bilek', top: '78%', left: '32%' },
];

function SkeletonSvg({ selectedRegion, onRegionSelect }) {
  return (
    <div className="skeleton-wrapper">
      <img
        src={skeletonImage}
        alt="Vücut bölgeleri işaretlenmiş insan iskeleti"
        className="skeleton-image"
      />

      {bodyRegions.map((region) => (
        <button
          key={region.id}
          type="button"
          className={`body-point ${selectedRegion === region.id ? 'active' : ''}`}
          data-region={region.id}
          style={{ top: region.top, left: region.left }}
          onClick={() => onRegionSelect(region.id)}
          aria-label={`${region.label} bölgesini seç`}
          aria-pressed={selectedRegion === region.id}
        >
          <span className="point-core" />
          <span className="point-label">{region.label}</span>
        </button>
      ))}
    </div>
  );
}

export default SkeletonSvg;
