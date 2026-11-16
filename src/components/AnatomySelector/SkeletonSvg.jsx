import skeletonImage from '../../assets/images/anatomy-selector-skeleton.webp';

const bodyRegions = [
  { id: 'cene', label: 'Çene', top: '11%', left: '50%' },
  { id: 'boyun', label: 'Boyun', top: '15.4%', left: '50%' },
  { id: 'omuz', label: 'Omuz', top: '19%', left: '66%' },
  { id: 'omurga', label: 'Omurga', top: '29.2%', left: '50%' },
  { id: 'bel', label: 'Bel ve Sırt', top: '37.4%', left: '50%' },
  { id: 'kalca', label: 'Kalça', top: '49.2%', left: '39.5%' },
  { id: 'dirsek', label: 'Dirsek', top: '35.4%', left: '71.6%' },
  { id: 'diz', label: 'Diz', top: '68.9%', left: '41.7%' },
  { id: 'el-bilek', label: 'El ve Bilek', top: '48.4%', left: '20%' },
  { id: 'ayak-bilek', label: 'Ayak ve Bilek', top: '91.6%', left: '41.7%' },
];

function SkeletonSvg({ selectedRegion, onRegionSelect }) {
  return (
    <div className="skeleton-wrapper">
      <img
        src={skeletonImage}
        alt="Vücut bölgelerini seçmek için önden görülen üç boyutlu insan iskeleti"
        className="skeleton-image"
      />

      {bodyRegions.map((region) => (
        <button
          key={region.id}
          type="button"
          className={`body-point ${selectedRegion === region.id ? 'active' : ''}`}
          data-region={region.id}
          style={{
            '--point-top': region.top,
            '--point-left': region.left,
            '--point-mobile-top': region.mobileTop ?? region.top,
            '--point-mobile-left': region.mobileLeft ?? region.left,
          }}
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
