import skeletonImage from '../../assets/images/anatomy-selector-skeleton.webp';

const bodyRegions = [
  { id: 'cene', label: 'Çene', top: '11.7%', left: '50%', mobileTop: '11.3%', mobileLeft: '40%' },
  { id: 'boyun', label: 'Boyun', top: '15.2%', left: '50%', mobileTop: '15.8%', mobileLeft: '58%' },
  { id: 'omuz', label: 'Omuz', top: '19.7%', left: '66%' },
  { id: 'omurga', label: 'Omurga', top: '30.2%', left: '50%', mobileLeft: '44%' },
  { id: 'bel', label: 'Bel ve Sırt', top: '38.2%', left: '50%', mobileLeft: '56%' },
  { id: 'kalca', label: 'Kalça', top: '47.4%', left: '50%', mobileLeft: '46%' },
  { id: 'dirsek', label: 'Dirsek', top: '35.5%', left: '75.2%' },
  { id: 'diz', label: 'Diz', top: '69.2%', left: '41.6%' },
  { id: 'el-bilek', label: 'El ve Bilek', top: '48.2%', left: '18.6%' },
  { id: 'ayak-bilek', label: 'Ayak ve Bilek', top: '91.2%', left: '41.2%' },
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
