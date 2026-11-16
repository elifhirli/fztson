import skeletonImage from '../assets/images/anatomy-selector-skeleton.webp';
import lumbarDiscImage from '../assets/images/conditions/lumbar-disc-herniation.webp';
import sacroiliacJointImage from '../assets/images/conditions/sacroiliac-joint.webp';
import lumbarLordosisFlatImage from '../assets/images/conditions/lumbar-lordosis-flat.webp';
import lumbarHyperlordosisImage from '../assets/images/conditions/lumbar-hyperlordosis.webp';
import mechanicalLowBackPainImage from '../assets/images/conditions/mechanical-low-back-pain.webp';
import cervicalDiscImage from '../assets/images/conditions/cervical-disc-herniation.webp';
import cervicalLordosisFlatImage from '../assets/images/conditions/cervical-lordosis-flat.webp';
import cervicalHyperlordosisImage from '../assets/images/conditions/cervical-hyperlordosis.webp';
import scoliosisImage from '../assets/images/conditions/scoliosis.webp';
import ankylosingImage from '../assets/images/conditions/ankylosing-spondylitis.webp';
import osteoporosisImage from '../assets/images/conditions/osteoporosis-dexa.webp';
import spondylolisthesisImage from '../assets/images/conditions/spondylolisthesis.webp';
import spinalStenosisImage from '../assets/images/conditions/spinal-stenosis.webp';
import frozenShoulderImage from '../assets/images/conditions/frozen-shoulder.webp';
import shoulderMuscleInjuryImage from '../assets/images/conditions/shoulder-muscle-injury.webp';
import shoulderOsteoarthritisImage from '../assets/images/conditions/shoulder-osteoarthritis.webp';
import rotatorCuffTearImage from '../assets/images/conditions/rotator-cuff-tear.webp';
import supraspinatusImage from '../assets/images/conditions/supraspinatus-tendinopathy.webp';
import piriformisImage from '../assets/images/conditions/piriformis-syndrome.webp';
import hipOsteoarthritisImage from '../assets/images/conditions/hip-osteoarthritis.webp';
import hipDysplasiaImage from '../assets/images/conditions/hip-dysplasia.webp';
import hipSoftTissueImage from '../assets/images/conditions/hip-soft-tissue.webp';
import tennisElbowImage from '../assets/images/conditions/tennis-elbow.webp';
import golferElbowImage from '../assets/images/conditions/golfer-elbow.webp';
import cubitalTunnelImage from '../assets/images/conditions/cubital-tunnel.webp';
import olecranonBursitisImage from '../assets/images/conditions/olecranon-bursitis.webp';
import elbowOsteoarthritisImage from '../assets/images/conditions/elbow-osteoarthritis.webp';
import elbowFractureImage from '../assets/images/conditions/elbow-fracture.webp';
import meniscusImage from '../assets/images/conditions/meniscus-tear.webp';
import cruciateLigamentImage from '../assets/images/conditions/cruciate-ligament.webp';
import mclInjuryImage from '../assets/images/conditions/mcl-injury.webp';
import lclInjuryImage from '../assets/images/conditions/lcl-injury.webp';
import kneeOsteoarthritisImage from '../assets/images/conditions/knee-osteoarthritis.webp';
import patellarTendonImage from '../assets/images/conditions/patellar-tendinopathy.webp';
import chondromalaciaImage from '../assets/images/conditions/chondromalacia-patella.webp';
import kneeReplacementImage from '../assets/images/conditions/knee-replacement.webp';
import carpalTunnelImage from '../assets/images/conditions/carpal-tunnel.webp';
import deQuervainImage from '../assets/images/conditions/de-quervain.webp';
import wristOsteoarthritisImage from '../assets/images/conditions/wrist-osteoarthritis.webp';
import rheumatoidArthritisImage from '../assets/images/conditions/rheumatoid-arthritis.webp';
import triggerFingerImage from '../assets/images/conditions/trigger-finger.webp';
import ankleSprainImage from '../assets/images/conditions/ankle-sprain.webp';
import achillesTendinopathyImage from '../assets/images/conditions/achilles-tendinopathy.webp';
import flatfootImage from '../assets/images/conditions/flatfoot.webp';
import tarsalTunnelImage from '../assets/images/conditions/tarsal-tunnel.webp';
import achillesRuptureImage from '../assets/images/conditions/achilles-rupture.webp';
import footDropImage from '../assets/images/conditions/foot-drop.webp';
import tmjImage from '../assets/images/conditions/tmj-dysfunction.webp';
import tinnitusImage from '../assets/images/conditions/tinnitus.webp';
import balanceImage from '../assets/images/conditions/balance-impairment.webp';
import vertigoImage from '../assets/images/conditions/vertigo.webp';
import tensionHeadacheImage from '../assets/images/conditions/tension-headache.webp';
import lymphedemaImage from '../assets/images/conditions/lymphedema.webp';
import lipedemaImage from '../assets/images/conditions/lipedema.webp';
import reformerPilatesImage from '../assets/images/conditions/reformer-pilates.webp';
import pelvicFloorImage from '../assets/images/conditions/pelvic-floor-rehab.webp';

const regionLabels = {
  bel: 'Bel ve Sırt',
  boyun: 'Boyun',
  omurga: 'Omurga',
  omuz: 'Omuz',
  kalca: 'Kalça',
  dirsek: 'Dirsek',
  diz: 'Diz',
  'el-bilek': 'El ve Bilek',
  'ayak-bilek': 'Ayak ve Bilek',
  cene: 'Çene',
  diger: 'Diğer',
};

const processSteps = [
  { title: 'Değerlendirme', description: 'Şikâyetler, hareket kapasitesi, günlük yaşam gereksinimleri ve ilgili sağlık öyküsü birlikte değerlendirilir.' },
  { title: 'Kişiye Özel Planlama', description: 'Değerlendirme bulgularına ve hedeflere göre uygulanabilir bir fizyoterapi planı oluşturulur.' },
  { title: 'Egzersiz ve Terapi Süreci', description: 'Uygun görülen egzersizler, hareket eğitimi ve destekleyici fizyoterapi uygulamaları planlı biçimde ilerletilir.' },
  { title: 'Takip ve Güncelleme', description: 'İlerleme düzenli aralıklarla gözden geçirilir; program ihtiyaçlara ve yanıta göre güncellenebilir.' },
];

const commonApproaches = {
  conservative: {
    label: 'Cerrahisiz Fizyoterapi',
    title: 'Ameliyatsız / Cerrahisiz Fizyoterapi Yaklaşımı',
    description: 'Değerlendirme bulgularına göre ağrı yönetimi, hareket açıklığının geliştirilmesi, kuvvetlendirme, hareket eğitimi ve günlük aktivite düzenlemeleri planlanabilir. Uygulanacak program kişinin yakınmaları, fonksiyonel kapasitesi ve klinik bulgularına göre kişiselleştirilir.',
  },
  preoperative: {
    label: 'Cerrahi Öncesi',
    title: 'Cerrahi Öncesi Fizyoterapi Yaklaşımı',
    description: 'Cerrahi planlanan uygun durumlarda ameliyat öncesinde hareket açıklığının korunması, kas kuvvetinin desteklenmesi ve kişinin ameliyat sonrası sürece hazırlanması hedeflenebilir. Program, hekim değerlendirmesi ve planlanan cerrahi prosedüre göre şekillendirilir.',
  },
  postoperative: {
    label: 'Cerrahi Sonrası',
    title: 'Cerrahi Sonrası Fizyoterapi Yaklaşımı',
    description: 'Cerrahi sonrasında rehabilitasyon; cerrahın belirlediği protokol doğrultusunda hareket açıklığının geliştirilmesi, kas kuvvetinin yeniden kazanılması ve günlük aktivitelere kademeli dönüşü destekleyecek şekilde planlanabilir.',
  },
};

const disclaimer = 'Bu içerikler genel bilgilendirme amacı taşır. Belirtilerin nedeni kişiden kişiye değişebilir; tanı ve uygun yaklaşım için kişisel değerlendirme gerekir.';

function disease(id, title, slug, region, description, overview, symptoms, options = {}) {
  return {
    id,
    title,
    slug,
    region,
    regionLabel: regionLabels[region],
    description,
    shortDescription: description,
    overview,
    symptoms,
    heroImage: options.heroImage ?? skeletonImage,
    heroImageAlt: options.heroImageAlt
      ?? `${regionLabels[region]} bölgesini gösteren anatomik görsel`,
    approaches: commonApproaches,
    processSteps,
    disclaimer,
    showApproaches: true,
    seo: { title: `${title} | Fizyoterapi`, description },
    ...options,
  };
}

// Yeni içerikler bu listeye tek kayıt olarak eklenir; kart ve detay sayfası aynı kaydı kullanır.
export const treatments = [
  disease(1, 'Bel Fıtığı', 'bel-fitigi', 'bel',
    'Bel omurları arasındaki disklerin etkilenmesi, bel ağrısı ve bazı kişilerde bacağa yayılan yakınmalara neden olabilir.',
    'Bel fıtığı, bel omurları arasındaki disk dokusunun yapısının bozulması veya dışarı doğru taşmasıyla ortaya çıkan bir durumdur. Sinir yapıların etkilenmesi halinde bel bölgesindeki yakınmalara bacakta ağrı, uyuşma veya karıncalanma eşlik edebilir.',
    ['Bel ağrısı', 'Kalça veya bacağa yayılan ağrı', 'Uzun süre oturmada zorlanma', 'Eğilip doğrulurken ağrı', 'Bacakta uyuşma veya karıncalanma'],
    { heroImage: lumbarDiscImage, heroImageAlt: 'Bel omurları arasındaki fıtıklaşmış diski ve etkilenen siniri gösteren tıbbi illüstrasyon' }),
  disease(2, 'Sakroiliak Eklem Disfonksiyonu', 'sakroiliak-eklem-disfonksiyonu', 'bel',
    'Omurga ile leğen kemiğini birleştiren sakroiliak eklem çevresindeki sorunlar bel ve kalça bölgesinde ağrıya neden olabilir.',
    'Sakroiliak eklem, omurgadan alt ekstremitelere yük aktarımında görev alan yapılardan biridir. Eklem ve çevresindeki dokuların mekanik olarak etkilenmesi, özellikle belin alt kısmı ve kalçada hissedilen yakınmalarla seyredebilir.',
    ['Tek taraflı bel veya kalça ağrısı', 'Oturup kalkarken rahatsızlık', 'Merdiven çıkarken ağrı', 'Uzun süre ayakta kalmada zorlanma', 'Yatakta dönerken ağrı'],
    { heroImage: sacroiliacJointImage, heroImageAlt: 'Pelviste sakroiliak eklemin konumunu gösteren tıbbi illüstrasyon' }),
  disease(3, 'Lomber Lordoz Düzleşmesi', 'bel-duzlesmesi', 'bel',
    'Bel omurgasının doğal içe doğru eğiminin azalması, duruş ve hareket sırasında bel bölgesindeki yük dağılımını etkileyebilir.',
    'Lomber lordoz, bel bölgesinde doğal olarak bulunan omurga eğrisidir. Bu eğriliğin azalması tek başına bir hastalık olarak değil; kişinin duruşu, hareketleri ve diğer klinik bulgularıyla birlikte değerlendirilir.',
    ['Belde sertlik hissi', 'Bel çevresinde kas gerginliği', 'Uzun süre otururken rahatsızlık', 'Eğilip doğrulmada zorlanma', 'Günlük aktiviteler sırasında bel ağrısı'],
    { heroImage: lumbarLordosisFlatImage, heroImageAlt: 'Bel omurgasının azalmış doğal eğrisini gösteren tıbbi illüstrasyon' }),
  disease(4, 'Lomber Lordoz Artışı', 'bel-cukurunun-artmasi', 'bel',
    'Bel bölgesindeki doğal içe doğru eğriliğin belirginleşmesi, bazı kişilerde duruş değişiklikleri ve bel yakınmalarıyla birlikte görülebilir.',
    'Lomber lordoz artışı, bel omurgasının doğal eğiminin normalden daha belirgin görünmesidir. Kişinin anatomik yapısı, duruş alışkanlıkları ve kas dengesiyle birlikte değerlendirilmesi gerekir.',
    ['Bel ağrısı', 'Uzun süre ayakta durmada rahatsızlık', 'Bel kaslarında gerginlik', 'Duruş değişiklikleri', 'Bazı hareketlerde zorlanma'],
    { heroImage: lumbarHyperlordosisImage, heroImageAlt: 'Bel omurgasının artmış doğal eğrisini gösteren tıbbi illüstrasyon' }),
  disease(5, 'Mekanik Bel Ağrısı', 'mekanik-bel-agrilari', 'bel',
    'Hareket, duruş veya fiziksel yüklenmeyle değişebilen ve günlük yaşamı etkileyebilen yaygın bir bel ağrısı türüdür.',
    'Mekanik bel ağrısı; kas, eklem ve çevredeki yumuşak dokularla ilişkili olabilen bel ağrılarını tanımlamak için kullanılan genel bir ifadedir. Ağrının şiddeti çoğunlukla hareket ve pozisyon değişikliklerinden etkilenir.',
    ['Hareketle değişen bel ağrısı', 'Uzun süre oturmada zorlanma', 'Eğilip kalkarken rahatsızlık', 'Bel çevresinde gerginlik', 'Aktivite sonrası artan ağrı'],
    { heroImage: mechanicalLowBackPainImage, heroImageAlt: 'Bel çevresindeki kas ve eklem kaynaklı ağrı bölgesini gösteren tıbbi illüstrasyon' }),
  disease(6, 'Bel Kayması — Spondilolistezis', 'bel-kaymasi', 'bel',
    'Bir omurun komşu omura göre yer değiştirmesi bel ağrısı ve bazı kişilerde hareketle ilişkili yakınmalara neden olabilir.',
    'Spondilolistezis olarak da adlandırılan bel kayması, omurlardan birinin komşu omura göre öne veya arkaya doğru yer değiştirmesidir. Belirtilerin düzeyi kaymanın derecesine ve çevredeki yapıların etkilenmesine göre değişebilir.',
    ['Bel ağrısı', 'Uzun süre ayakta kalmada zorlanma', 'Bel hareketlerinde kısıtlılık', 'Kalça veya bacağa yayılan yakınmalar', 'Aktiviteyle artan rahatsızlık'],
    { heroImage: spondylolisthesisImage, heroImageAlt: 'Öne doğru yer değiştirmiş bel omurunu gösteren tıbbi illüstrasyon' }),
  disease(7, 'Lomber Kanal Daralması', 'kanal-daralmasi', 'bel',
    'Bel bölgesindeki sinir yapıların geçtiği alanların daralması, özellikle ayakta durma ve yürüme sırasında yakınmalara neden olabilir.',
    'Lomber spinal stenoz olarak da adlandırılan kanal daralması, bel omurgasında sinirlerin geçtiği alanların daralmasıdır. Sinir yapıların etkilenme düzeyine göre bel ve bacaklarda farklı yakınmalar görülebilir.',
    ['Yürümekle artan bacak yakınmaları', 'Uzun süre ayakta kalmada zorlanma', 'Bel ağrısı', 'Bacaklarda uyuşma veya ağırlık hissi', 'Oturma veya öne eğilme ile rahatlama görülebilmesi'],
    { heroImage: spinalStenosisImage, heroImageAlt: 'Daralmış bel omurga kanalını ve etkilenen sinirleri gösteren tıbbi illüstrasyon' }),

  disease(8, 'Servikal Lordoz Düzleşmesi', 'boyun-duzlesmesi', 'boyun',
    'Boyun omurgasının doğal eğiminin azalması, bazı kişilerde boyun ağrısı ve kas gerginliğiyle birlikte görülebilir.',
    'Servikal lordoz, boyun omurgasının doğal eğrisidir. Bu eğriliğin azalması kişinin duruşu, kas yapısı ve klinik bulgularıyla birlikte değerlendirilmesi gereken bir görüntüleme bulgusudur.',
    ['Boyun ağrısı', 'Sırt ağrısı', 'Boyunda sertlik', 'Omuz çevresinde gerginlik', 'Baş hareketlerinde zorlanma', 'Uzun süre masa başında kalmada rahatsızlık'],
    { heroImage: cervicalLordosisFlatImage, heroImageAlt: 'Boyun omurgasının azalmış doğal eğrisini gösteren tıbbi illüstrasyon' }),
  disease(9, 'Servikal Lordoz Artışı', 'servikal-lordoz-artisi', 'boyun',
    'Boynun doğal eğriliğinin belirginleşmesi, bazı kişilerde duruş ve kas yüklenmesiyle ilişkili yakınmalara eşlik edebilir.',
    'Servikal lordoz artışı, boyun omurgasının doğal eğrisinin daha belirgin olmasıdır. Tek başına şikâyet nedeni olduğu kabul edilmez ve kişinin diğer klinik bulgularıyla birlikte değerlendirilir.',
    ['Boyun çevresinde gerginlik', 'Sırt ağrısı', 'Omuzlarda rahatsızlık', 'Boyun hareketlerinde kısıtlılık', 'Uzun süre aynı pozisyonda zorlanma', 'Duruşla ilişkili yakınmalar'],
    { heroImage: cervicalHyperlordosisImage, heroImageAlt: 'Boyun omurgasının artmış doğal eğrisini gösteren tıbbi illüstrasyon' }),
  disease(10, 'Boyun Fıtığı — Servikal Disk Hernisi', 'boyun-fitigi', 'boyun',
    'Boyun omurları arasındaki disklerin etkilenmesi boyun ağrısı ve bazı kişilerde kola yayılan yakınmalara neden olabilir.',
    'Servikal disk hernisi, boyun omurları arasındaki disk dokusunun dışarı doğru taşması veya yapısının bozulmasıdır. Sinirlerin etkilenmesi halinde boyundaki ağrıya kol ve elde oluşan yakınmalar eşlik edebilir.',
    ['Boyun ağrısı', 'Sırt ağrısı', 'Omuz veya kola yayılan ağrı', 'Kol veya elde uyuşma', 'Boyun hareketlerinde zorlanma', 'Güç kaybı gözükebilir'],
    { heroImage: cervicalDiscImage, heroImageAlt: 'Boyun omurları arasında fıtıklaşmış diski ve sinir etkilenmesini gösteren tıbbi illüstrasyon' }),

  disease(11, 'Skolyoz', 'skolyoz', 'omurga',
    'Skolyoz, omurganın yana doğru eğrilmesi ve omurların dönmesiyle karakterize üç boyutlu bir omurga deformitesidir.',
    'Skolyozda omurganın normal dizilimi değişir ve gövdede farklı seviyelerde asimetri görülebilir. Eğriliğin derecesi ve kişinin yaşına göre takip ve yaklaşım değişiklik gösterebilir.',
    ['Omuz seviyelerinde farklılık', 'Bel veya gövde asimetrisi', 'Bir kürek kemiğinin daha belirgin görünmesi', 'Duruş farklılıkları', 'Bazı kişilerde sırt veya bel ağrısı'],
    { heroImage: scoliosisImage, heroImageAlt: 'S biçiminde omurga eğriliğini gösteren skolyoz tıbbi illüstrasyonu' }),
  disease(12, 'Ankilozan Spondilit', 'ankilozan-spondilit', 'omurga',
    'Özellikle omurga ve sakroiliak eklemleri etkileyebilen kronik inflamatuar romatizmal bir hastalıktır.',
    'Ankilozan spondilit, omurgada ağrı ve tutuklukla seyredebilen inflamatuar bir hastalıktır. Zaman içerisinde omurganın hareketliliğini ve kişinin günlük fonksiyonlarını etkileyebilir.',
    ['Bel ve kalça bölgesinde ağrı', 'Sabah tutukluğu', 'Hareketsizlik sonrası sertlik', 'Omurga hareketlerinde azalma', 'Hareket ettikçe rahatlayabilen yakınmalar'],
    { heroImage: ankylosingImage, heroImageAlt: 'Omurlarda kemik köprüleşmesini gösteren ankilozan spondilit tıbbi illüstrasyonu' }),
  disease(13, 'Osteoporoz — Kemik Erimesi', 'osteoporoz-kemik-erimesi', 'omurga',
    'Kemik yoğunluğunun ve dayanıklılığının azalmasıyla kırık riskinin arttığı sistemik bir kemik hastalığıdır.',
    'Osteoporoz, kemik dokusunun dayanıklılığının azalması sonucu kemiklerin daha kırılgan hale gelmesidir. Uzun süre belirti vermeden ilerleyebilir ve bazen ilk bulgu kırık olabilir.',
    ['Uzun süre belirti vermeyebilmesi', 'Boyda kısalma', 'Duruş değişiklikleri', 'Omurga kırıklarına bağlı sırt ağrısı', 'Kırık riskinde artış', 'Kemik yoğunluğu ölçümü (DEXA) ile değerlendirme'],
    { heroImage: osteoporosisImage, heroImageAlt: 'DEXA kemik yoğunluğu ölçümünü ve gözenekli kemik yapısını gösteren tıbbi illüstrasyon' }),

  disease(14, 'Donuk Omuz', 'donuk-omuz', 'omuz',
    'Omuz eklem kapsülünün etkilenmesiyle ağrı ve giderek artan hareket kısıtlılığı görülebilir.',
    'Donuk omuz, omuz eklemini çevreleyen kapsülün sertleşmesi ve omuz hareket açıklığının azalmasıyla seyreden bir durumdur. Özellikle kolu yukarı kaldırma ve eli arkaya götürme gibi hareketler zorlaşabilir.',
    ['Omuz ağrısı', 'Geceleri artabilen ağrı', 'Kolu yukarı kaldırmada zorlanma', 'Eli sırta götürmede kısıtlılık', 'Giyinme gibi günlük işlerde zorlanma'],
    { heroImage: frozenShoulderImage, heroImageAlt: 'Kalınlaşmış ve etkilenmiş omuz eklem kapsülünü gösteren tıbbi illüstrasyon' }),
  disease(15, 'Omuz Kas Yaralanmaları', 'omuz-kas-yaralanmasi', 'omuz',
    'Omuz çevresindeki kas veya tendonların zorlanması, ağrı ve hareket sırasında fonksiyon kaybına neden olabilir.',
    'Omuz çevresindeki kasların ani zorlanma, tekrarlayan yüklenme veya travma nedeniyle etkilenmesi kas yaralanmalarına yol açabilir. Yaralanmanın derecesine göre ağrı ve hareket kaybı değişebilir.',
    ['Omuz çevresinde ağrı', 'Hareketle artan rahatsızlık', 'Kolu kaldırmada zorlanma', 'Omuz çevresinde hassasiyet', 'Kuvvet kaybı'],
    { heroImage: shoulderMuscleInjuryImage, heroImageAlt: 'Omuz çevresindeki zorlanmış kasları gösteren tıbbi illüstrasyon' }),
  disease(16, 'Omuz Eklem Dejenerasyonu', 'omuz-eklem-dejenerasyonlari', 'omuz',
    'Omuz ekleminde gelişen dejeneratif değişiklikler zamanla ağrı, sertlik ve hareket kaybına yol açabilir.',
    'Eklem yüzeylerinin zaman içerisinde değişime uğraması omuz hareketlerinin daha ağrılı ve kısıtlı hale gelmesine neden olabilir. Bulguların şiddeti kişiden kişiye farklılık gösterir.',
    ['Omuz ağrısı', 'Eklemde sertlik', 'Kolu kaldırmada zorlanma', 'Hareket sırasında ses veya takılma hissi', 'Günlük aktivitelerde zorlanma'],
    { heroImage: shoulderOsteoarthritisImage, heroImageAlt: 'Omuz eklemindeki kıkırdak kaybını gösteren tıbbi illüstrasyon' }),
  disease(17, 'Omuz Tendon Yırtıkları', 'omuz-tendon-yirtiklari', 'omuz',
    'Omuz çevresindeki tendonlarda oluşan yırtıklar ağrı, kuvvet kaybı ve kol hareketlerinde zorlanmaya neden olabilir.',
    'Omuzun hareket ve stabilitesinde görev alan tendonlar travma, tekrarlayan yüklenmeler veya zamanla gelişen dejeneratif değişiklikler sonucunda kısmen ya da tamamen yırtılabilir.',
    ['Kolu kaldırırken ağrı', 'Omuzda kuvvet kaybı', 'Gece artabilen ağrı', 'Baş üstü hareketlerde zorlanma', 'Giyinme ve uzanma hareketlerinde güçlük'],
    { heroImage: rotatorCuffTearImage, heroImageAlt: 'Omuzdaki rotator manşet tendon yırtığını gösteren tıbbi illüstrasyon' }),
  disease(18, 'Supraspinatus Tendiniti / Tendinopatisi', 'supraspinatus-tendinopatisi', 'omuz',
    'Supraspinatus tendonunun etkilenmesi özellikle kolu kaldırma ve baş üstü aktiviteler sırasında omuz ağrısına neden olabilir.',
    'Supraspinatus, omuzun rotator manşet adı verilen kas-tendon grubunun bir parçasıdır. Tendonun aşırı yüklenmesi veya irritasyonu omuz hareketlerinde ağrı ve fonksiyon kaybıyla seyredebilir.',
    ['Kolu yana kaldırırken ağrı', 'Baş üstü hareketlerde zorlanma', 'Omuzun dış tarafında ağrı', 'Gece artabilen rahatsızlık', 'Bazı hareketlerde kuvvet kaybı'],
    { heroImage: supraspinatusImage, heroImageAlt: 'Omuzdaki etkilenmiş supraspinatus tendonunu gösteren tıbbi illüstrasyon' }),

  disease(19, 'Piriformis Sendromu', 'piriformis-sendromu', 'kalca',
    'Kalçanın derin bölgesindeki piriformis kası çevresinde gelişen sorunlar kalça ağrısı ve bazı kişilerde bacağa yayılan yakınmalarla görülebilir.',
    'Piriformis kası kalçanın derin bölgesinde yer alır ve kalça hareketlerinde görev alır. Kas ve çevresindeki yapıların etkilenmesi kalça bölgesinde ağrı ve hareketle değişen yakınmalara neden olabilir.',
    ['Kalçanın arka kısmında ağrı', 'Uzun süre oturmada rahatsızlık', 'Yürürken veya merdivende ağrı', 'Bacağa yayılabilen yakınmalar', 'Kalça çevresinde hassasiyet'],
    { heroImage: piriformisImage, heroImageAlt: 'Piriformis kası ile siyatik sinirin ilişkisini gösteren tıbbi illüstrasyon' }),
  disease(20, 'Kalça Osteoartriti', 'kalca-osteoartriti', 'kalca',
    'Kalça eklemindeki dejeneratif değişiklikler ağrı, sertlik ve hareket kaybına neden olabilir.',
    'Kalça osteoartriti, eklem yüzeylerinde zaman içerisinde ortaya çıkan yapısal değişikliklerle seyreden bir eklem problemidir. İlerledikçe yürüyüş ve günlük aktiviteler etkilenebilir.',
    ['Kasık veya kalça ağrısı', 'Yürümede zorlanma', 'Merdiven kullanımında güçlük', 'Ayakkabı ve çorap giymede zorlanma', 'Bağdaş kurmada kısıtlılık'],
    { heroImage: hipOsteoarthritisImage, heroImageAlt: 'Kalça eklemindeki kıkırdak kaybını ve eklem daralmasını gösteren tıbbi illüstrasyon' }),
  disease(21, 'Gelişimsel Kalça Displazisi / Doğumsal Kalça Çıkığı', 'gelisimsel-kalca-displazisi', 'kalca',
    'Kalça ekleminin gelişimiyle ilişkili yapısal farklılıklar eklem hareketini ve yük aktarımını etkileyebilir.',
    'Kalça eklemindeki yuva ve uyluk kemiği başının gelişimsel uyumunun normalden farklı olmasıdır. Etkilenmenin düzeyine göre çocukluk veya yetişkinlik döneminde farklı bulgular görülebilir.',
    ['Kalça veya kasık ağrısı', 'Uzun yürüyüşlerde zorlanma', 'Kalça hareketlerinde kısıtlılık', 'Aktivite sonrasında rahatsızlık', 'Bazı kişilerde yürüme biçiminde değişiklik'],
    { heroImage: hipDysplasiaImage, heroImageAlt: 'Kalça yuvası ile femur başı arasındaki gelişimsel uyumsuzluğu gösteren tıbbi illüstrasyon' }),
  disease(22, 'Kalça Yumuşak Doku Problemleri', 'kalca-yumusak-doku-problemleri', 'kalca',
    'Kalça çevresindeki kas, tendon ve diğer yumuşak dokuların etkilenmesi hareketle ilişkili ağrıya neden olabilir.',
    'Kalça çevresinde çok sayıda kas, tendon ve bağ bulunur. Bu yapıların aşırı yüklenme, zorlanma veya tekrarlayan hareketlerden etkilenmesi farklı tipte kalça yakınmaları oluşturabilir.',
    ['Kalça çevresinde ağrı', 'Lokal hassasiyet', 'Yürürken rahatsızlık', 'Merdivende zorlanma', 'Belirli kalça hareketlerinde ağrı'],
    { heroImage: hipSoftTissueImage, heroImageAlt: 'Kalça çevresindeki etkilenmiş kas ve tendonları gösteren tıbbi illüstrasyon' }),

  disease(23, 'Tenisçi Dirseği — Lateral Epikondilit', 'tenisci-dirsegi', 'dirsek',
    'Dirseğin dış tarafındaki tendonların aşırı yüklenmesi sonucu ağrı ve kavrama sırasında zorlanma görülebilir.',
    'Lateral epikondilit olarak bilinen tenisçi dirseği, ön kol kaslarının dirseğin dış tarafındaki tendon bağlantılarının aşırı yüklenmesiyle ilişkili bir tendon problemidir.',
    ['Dirseğin dış tarafında ağrı', 'Kavanoz açarken ağrı', 'Bir nesneyi kavramada zorlanma', 'El bileği hareketlerinde rahatsızlık', 'Taşıma sırasında ağrı'],
    { heroImage: tennisElbowImage, heroImageAlt: 'Dirseğin dış tarafındaki etkilenen tendon bağlantısını gösteren tıbbi illüstrasyon' }),
  disease(24, 'Golfçü Dirseği — Medial Epikondilit', 'golfcu-dirsegi', 'dirsek',
    'Dirseğin iç tarafındaki tendonların aşırı yüklenmesi ağrı ve hassasiyete neden olabilir.',
    'Medial epikondilit olarak da bilinen golfçü dirseği, ön kol kaslarının dirseğin iç tarafındaki tendon bağlantılarının tekrarlayan yüklenmelerden etkilenmesidir.',
    ['Dirseğin iç kısmında ağrı', 'Kavrama sırasında rahatsızlık', 'El bileği hareketlerinde ağrı', 'Taşıma sırasında zorlanma', 'Dirsek iç kısmında hassasiyet'],
    { heroImage: golferElbowImage, heroImageAlt: 'Dirseğin iç tarafındaki etkilenen tendon bağlantısını gösteren tıbbi illüstrasyon' }),
  disease(25, 'Kübital Tünel Sendromu', 'kubital-tunel-sendromu', 'dirsek',
    'Dirsek çevresinden geçen ulnar sinirin etkilenmesi el ve parmaklarda uyuşma ve güç kaybıyla seyredebilir.',
    'Ulnar sinir dirseğin iç kısmındaki kübital tünelden geçer. Sinirin bu bölgede baskıya veya gerilmeye maruz kalması özellikle yüzük ve serçe parmaklarda belirtiler oluşturabilir.',
    ['Serçe parmakta uyuşma', 'Yüzük parmağında uyuşma', 'Dirseğin iç tarafında rahatsızlık', 'Uzun süre dirseği bükünce artan yakınmalar', 'Elde kavrama gücünde azalma'],
    { heroImage: cubitalTunnelImage, heroImageAlt: 'Dirsek çevresinde sıkışan ulnar siniri gösteren tıbbi illüstrasyon' }),
  disease(26, 'Olekranon Bursiti', 'olekranon-bursiti', 'dirsek',
    'Dirseğin arka kısmındaki bursanın etkilenmesi bölgede şişlik, hassasiyet ve ağrı oluşturabilir.',
    'Olekranon bursası, dirsek ucunda bulunan ve dokular arasındaki sürtünmeyi azaltmaya yardımcı olan küçük sıvı kesesidir. Tahriş veya inflamasyon sonucunda dirsek arkasında belirgin şişlik oluşabilir.',
    ['Dirsek arkasında şişlik', 'Lokal hassasiyet', 'Dirseğe yaslanırken rahatsızlık', 'Hareket sırasında ağrı', 'Bazı durumlarda hareket kısıtlılığı'],
    { heroImage: olecranonBursitisImage, heroImageAlt: 'Dirsek arkasındaki şişmiş olekranon bursasını gösteren tıbbi illüstrasyon' }),
  disease(27, 'Dirsek Kireçlenmesi', 'dirsek-kireclenmesi', 'dirsek',
    'Dirsek eklemindeki dejeneratif değişiklikler hareket kısıtlılığı, sertlik ve ağrıya neden olabilir.',
    'Dirsek osteoartriti, eklem yüzeylerinin zaman içerisinde değişime uğramasıyla ortaya çıkan dejeneratif bir eklem problemidir. Günlük hareketler ve yük taşıma gibi aktiviteler etkilenebilir.',
    ['Dirsek ağrısı', 'Hareketlerde sertlik', 'Dirseği tam açıp kapatmada zorlanma', 'Yük taşırken rahatsızlık', 'Hareket sırasında ses veya takılma hissi'],
    { heroImage: elbowOsteoarthritisImage, heroImageAlt: 'Dirsek eklemindeki kıkırdak kaybını gösteren tıbbi illüstrasyon' }),
  disease(28, 'Kırık Sonrası Dirsek Hareket Kısıtlılığı', 'kirik-sonrasi-dirsek-hareket-kisitliligi', 'dirsek',
    'Dirsek kırıkları ve sonrasındaki hareketsizlik, eklem hareketlerinin azalmasına ve günlük kullanımın zorlaşmasına yol açabilir.',
    'Kırık iyileşmesi sırasında gereken sabitleme ve dokularda gelişen sertlik, dirsek ekleminin hareket açıklığını azaltabilir. Etkilenme düzeyi kırığın türüne ve iyileşme sürecine göre değişebilir.',
    ['Dirseği tam açamama', 'Dirseği tam bükememe', 'Eklemde sertlik', 'Günlük işlerde zorlanma', 'Hareket sırasında ağrı'],
    { heroImage: elbowFractureImage, heroImageAlt: 'Kırık sonrası dirsek eklemini gösteren tıbbi illüstrasyon' }),

  disease(29, 'Menisküs Yırtığı', 'meniskus-yirtigi', 'diz',
    'Dizdeki menisküs dokusunun yaralanması ağrı, şişlik ve bazı hareketlerde takılma hissine neden olabilir.',
    'Menisküsler, diz eklemi içerisinde yük dağılımına ve eklem uyumuna katkı sağlayan yapılardır. Ani dönme hareketleri veya zaman içerisinde gelişen dejeneratif değişiklikler sonucu yırtık oluşabilir.',
    ['Diz ağrısı', 'Dizde şişlik', 'Çömelmede zorlanma', 'Dönme hareketlerinde ağrı', 'Takılma veya kilitlenme hissi'],
    { heroImage: meniscusImage, heroImageAlt: 'Diz eklemindeki menisküs yırtığını gösteren tıbbi illüstrasyon' }),
  disease(30, 'Ön Çapraz Bağ Yaralanması', 'on-capraz-bag-yaralanmasi', 'diz',
    'Ön çapraz bağ yaralanmaları diz stabilitesini etkileyerek güvensizlik ve sportif aktivitelerde zorlanmaya neden olabilir.',
    'Ön çapraz bağ dizin öne-arkaya ve dönme hareketlerindeki stabilitesinde önemli rol oynar. Özellikle ani yön değiştirme, durma veya travma sırasında yaralanabilir.',
    ['Dizde şişlik', 'Dizde boşalma veya güvensizlik hissi', 'Yön değiştirmede zorlanma', 'Spor aktivitelerinde güçlük', 'Diz ağrısı'],
    { heroImage: cruciateLigamentImage, heroImageAlt: 'Diz eklemindeki yaralanmış çapraz bağı gösteren tıbbi illüstrasyon' }),
  disease(31, 'Arka Çapraz Bağ Yaralanması', 'arka-capraz-bag-yaralanmasi', 'diz',
    'Arka çapraz bağın yaralanması dizin stabilitesini ve yük aktarımını etkileyebilir.',
    'Arka çapraz bağ, kaval kemiğinin uyluk kemiğine göre arkaya doğru aşırı hareketini sınırlayan önemli diz bağlarından biridir. Genellikle travmatik mekanizmalar sonucunda etkilenebilir.',
    ['Diz ağrısı', 'Şişlik', 'Dizde güvensizlik hissi', 'Merdivende zorlanma', 'Aktivite sırasında rahatsızlık'],
    { heroImage: cruciateLigamentImage, heroImageAlt: 'Diz eklemindeki çapraz bağları gösteren tıbbi illüstrasyon' }),
  disease(32, 'İç Yan Bağ Yaralanması', 'ic-yan-bag-yaralanmasi', 'diz',
    'Dizin iç tarafındaki bağın zorlanması veya yırtılması ağrı ve stabilite sorunlarına neden olabilir.',
    'Medial kollateral bağ, dizin iç tarafındaki stabiliteyi destekleyen yapılardan biridir. Dizin dış tarafından gelen zorlayıcı kuvvetler bu bağın etkilenmesine neden olabilir.',
    ['Dizin iç tarafında ağrı', 'Lokal hassasiyet', 'Şişlik', 'Yürümede zorlanma', 'Dizde güvensizlik hissi'],
    { heroImage: mclInjuryImage, heroImageAlt: 'Dizin iç yan bağındaki yaralanmayı gösteren tıbbi illüstrasyon' }),
  disease(33, 'Dış Yan Bağ Yaralanması', 'dis-yan-bag-yaralanmasi', 'diz',
    'Dizin dış tarafındaki bağın yaralanması ağrı ve eklem stabilitesinde azalmaya neden olabilir.',
    'Lateral kollateral bağ dizin dış tarafındaki stabiliteye katkı sağlar. Travma veya dizin iç tarafından gelen zorlayıcı kuvvetler sonucunda yaralanabilir.',
    ['Dizin dış tarafında ağrı', 'Hassasiyet', 'Şişlik', 'Yürümede zorlanma', 'Dizde dengesizlik hissi'],
    { heroImage: lclInjuryImage, heroImageAlt: 'Dizin dış yan bağındaki yaralanmayı gösteren tıbbi illüstrasyon' }),
  disease(34, 'Diz Osteoartriti — Diz Kireçlenmesi', 'diz-osteoartriti', 'diz',
    'Diz eklemindeki dejeneratif değişiklikler ağrı, sertlik ve günlük hareketlerde zorlanmaya neden olabilir.',
    'Diz osteoartriti eklem dokularında zaman içerisinde gelişen yapısal değişikliklerle seyreden kronik bir eklem problemidir. Yakınmalar kişinin aktivite düzeyine ve hastalığın evresine göre değişebilir.',
    ['Diz ağrısı', 'Merdivende zorlanma', 'Oturup kalkarken güçlük', 'Dizde sertlik', 'Yürüme mesafesinde azalma'],
    { heroImage: kneeOsteoarthritisImage, heroImageAlt: 'Diz eklemindeki kıkırdak kaybını ve kireçlenmeyi gösteren tıbbi illüstrasyon' }),
  disease(35, 'Patellar Tendinit — Sıçrayıcı Dizi', 'patellar-tendinit', 'diz',
    'Diz kapağının altındaki patellar tendonun aşırı yüklenmesi özellikle koşma ve sıçrama gibi aktivitelerde ağrıya neden olabilir.',
    'Patellar tendon, diz kapağını kaval kemiğine bağlayan ve dizin hareketinde önemli rol oynayan yapıdır. Özellikle koşma ve sıçrama içeren sporlarda tekrarlayan yüklenme, tendonun yük taşıma kapasitesini aşarak ağrıya yol açabilir. Yakınmalar çoğunlukla diz kapağının hemen altında hissedilir ve aktivite düzeyine göre değişebilir.',
    ['Diz kapağının altında ağrı', 'Koşarken rahatsızlık', 'Sıçrama sırasında ağrı', 'Merdivende zorlanma', 'Çömelme sırasında ağrı'],
    { heroImage: patellarTendonImage, heroImageAlt: 'Diz kapağı altındaki etkilenmiş patellar tendonu gösteren tıbbi illüstrasyon' }),
  disease(36, 'Kondromalazi Patella — Koşucu Dizi', 'kondromalazi-patella', 'diz',
    'Diz kapağı ile ilişkili eklem yüzeylerinin etkilenmesi özellikle merdiven ve çömelme gibi aktivitelerde ön diz ağrısına neden olabilir.',
    'Kondromalazi patella, diz kapağının arka yüzündeki kıkırdak dokuda meydana gelen değişiklikleri ifade eder. Ön diz ağrısına yol açabilen birçok durumdan biridir.',
    ['Diz önünde ağrı', 'Merdiven çıkıp inerken zorlanma', 'Çömelirken ağrı', 'Uzun süre oturduktan sonra rahatsızlık', 'Diz hareketinde ses veya sürtünme hissi'],
    { heroImage: chondromalaciaImage, heroImageAlt: 'Diz kapağının arkasındaki etkilenmiş kıkırdağı gösteren tıbbi illüstrasyon' }),
  disease(37, 'Diz Protezi Sonrası Rehabilitasyon', 'diz-protezi-sonrasi-rehabilitasyon', 'diz',
    'Diz protezi ameliyatı sonrasında hareket, kas kuvveti ve günlük aktivitelere dönüşün desteklenmesi için rehabilitasyon uygulanabilir.',
    'Diz protezi ameliyatından sonraki rehabilitasyon süreci kişinin ameliyatı ve cerrahın belirlediği protokole göre planlanır. Hareket açıklığı, kas fonksiyonu ve güvenli yürüyüş sürecin önemli parçalarıdır.',
    ['Diz hareketlerinde kısıtlılık', 'Kas kuvvetinde azalma', 'Yürümede zorlanma', 'Merdiven kullanımında güçlük', 'Günlük aktivitelere dönüşte zorlanma'],
    { heroImage: kneeReplacementImage, heroImageAlt: 'Diz protezinin eklem içindeki konumunu gösteren tıbbi illüstrasyon' }),

  disease(38, 'Karpal Tünel Sendromu', 'karpal-tunel-sendromu', 'el-bilek',
    'El bileğindeki median sinirin etkilenmesi elde uyuşma, karıncalanma ve bazı kişilerde kuvvet kaybına neden olabilir.',
    'Median sinir el bileğinde karpal tünel adı verilen dar bir alandan geçer. Sinirin bu bölgede baskı altında kalması özellikle başparmak, işaret ve orta parmakta yakınmalar oluşturabilir.',
    ['Elde uyuşma', 'Parmaklarda karıncalanma', 'Geceleri artabilen yakınmalar', 'Kavrama gücünde azalma', 'Eşyaları elde tutmada zorlanma'],
    { heroImage: carpalTunnelImage, heroImageAlt: 'El bileğinde sıkışan median siniri gösteren tıbbi illüstrasyon' }),
  disease(39, 'De Quervain Tendiniti — Başparmak Tendon Sıkışması', 'de-quervain-tendiniti', 'el-bilek',
    'Başparmak tarafındaki tendonların etkilenmesi başparmak ve el bileği hareketlerinde ağrıya neden olabilir.',
    'De Quervain, başparmak hareketlerinde görev alan bazı tendonların el bileğinin başparmak tarafındaki geçiş bölgesinde etkilenmesiyle ortaya çıkan bir tendon problemidir.',
    ['Başparmak tarafında el bileği ağrısı', 'Başparmak hareketlerinde zorlanma', 'Kavrama sırasında ağrı', 'Nesne kaldırırken rahatsızlık', 'Bölgede hassasiyet'],
    { heroImage: deQuervainImage, heroImageAlt: 'Başparmak tarafındaki etkilenmiş el bileği tendonlarını gösteren tıbbi illüstrasyon' }),
  disease(40, 'El Bileği Kireçlenmesi', 'el-bilegi-kireclenmesi', 'el-bilek',
    'El bileği eklemlerindeki dejeneratif değişiklikler ağrı, sertlik ve el kullanımında zorlanmaya neden olabilir.',
    'El bileği osteoartriti, eklem yüzeylerinin zaman içerisinde yapısal değişikliklere uğramasıdır. Bazı kişilerde geçirilmiş travma veya kırık sonrasında da gelişebilir.',
    ['El bileği ağrısı', 'Hareketlerde sertlik', 'Kavrama sırasında zorlanma', 'Yük taşırken ağrı', 'Hareket açıklığında azalma'],
    { heroImage: wristOsteoarthritisImage, heroImageAlt: 'El bileği eklemlerindeki kıkırdak kaybını gösteren tıbbi illüstrasyon' }),
  disease(41, 'Romatoid Artrit', 'romatoid-artrit', 'el-bilek',
    'Romatoid artrit, eklemleri etkileyebilen sistemik inflamatuar bir hastalıktır ve el-el bileğinde ağrı, şişlik ve hareket kısıtlılığına neden olabilir.',
    'Romatoid artrit bağışıklık sisteminin rol oynadığı kronik inflamatuar bir hastalıktır. Birden fazla eklemi etkileyebilir ve el ile el bileği eklemleri sık etkilenen bölgeler arasındadır.',
    ['Eklem ağrısı', 'Şişlik', 'Sabah tutukluğu', 'El hareketlerinde zorlanma', 'Kavrama fonksiyonunda azalma'],
    { heroImage: rheumatoidArthritisImage, heroImageAlt: 'El eklemlerindeki romatoid artrit değişikliklerini gösteren tıbbi illüstrasyon' }),
  disease(42, 'Tetik Parmak', 'tetik-parmak', 'el-bilek',
    'Parmak tendonunun hareketinin etkilenmesi parmakta takılma, kilitlenme ve hareket sırasında rahatsızlığa neden olabilir.',
    'Tetik parmakta parmağı hareket ettiren tendonun geçtiği yapı ile uyumu bozulur ve tendon rahat hareket edemez. Parmak açılıp kapanırken takılma veya kilitlenme hissedilebilir.',
    ['Parmakta takılma', 'Parmakta kilitlenme', 'Hareket sırasında ağrı', 'Parmak tabanında hassasiyet', 'Sabahları artabilen sertlik'],
    { heroImage: triggerFingerImage, heroImageAlt: 'Parmak tendonundaki sıkışmayı gösteren tıbbi illüstrasyon' }),

  disease(43, 'Ayak Bileği Burkulması', 'ayak-bilegi-burkulmasi', 'ayak-bilek',
    'Ayak bileği bağlarının zorlanması veya yaralanması ağrı, şişlik ve üzerine basmada zorlanmaya neden olabilir.',
    'Ayak bileğinin normal hareket sınırlarının dışına zorlanması eklemi destekleyen bağlarda gerilme veya yırtılmaya neden olabilir. Yaralanmanın derecesine göre belirtiler değişebilir.',
    ['Ayak bileğinde ağrı', 'Şişlik', 'Üzerine basmada zorlanma', 'Hareket kısıtlılığı', 'Bölgede hassasiyet'],
    { heroImage: ankleSprainImage, heroImageAlt: 'Ayak bileğinin dış yan bağlarındaki burkulmayı gösteren tıbbi illüstrasyon' }),
  disease(44, 'Aşil Tendiniti / Tendinopatisi', 'asil-tendinopatisi', 'ayak-bilek',
    'Aşil tendonunun aşırı yüklenmesi yürüyüş, koşu ve merdiven gibi aktivitelerde ağrıya neden olabilir.',
    'Aşil tendonu baldır kaslarını topuk kemiğine bağlayan güçlü bir tendondur. Tekrarlayan yüklenmeler sonucunda tendon yapısı etkilenebilir ve aktiviteyle ilişkili yakınmalar gelişebilir.',
    ['Topuğun arkasında ağrı', 'Sabahları sertlik', 'Yürürken rahatsızlık', 'Koşma sırasında ağrı', 'Tendon çevresinde hassasiyet'],
    { heroImage: achillesTendinopathyImage, heroImageAlt: 'Etkilenmiş Aşil tendonunu gösteren tıbbi illüstrasyon' }),
  disease(45, 'Düz Tabanlık', 'duz-tabanlik', 'ayak-bilek',
    'Ayağın iç kısmındaki doğal kavsin azalması veya yük altında belirgin şekilde düzleşmesi düz tabanlık olarak tanımlanır.',
    'Ayak kavsi vücuttan gelen yüklerin dağıtılmasına katkı sağlar. Düz tabanlıkta bu kavsin yüksekliği azalabilir ancak her düz tabanlık mutlaka ağrı veya fonksiyon problemi oluşturmaz.',
    ['Uzun yürüyüşlerde ayak ağrısı', 'Ayak tabanında yorgunluk', 'Uzun süre ayakta kalmada zorlanma', 'Ayak bileği çevresinde rahatsızlık', 'Ayakkabı kullanımında bazı zorluklar'],
    { heroImage: flatfootImage, heroImageAlt: 'Azalmış ayak iç kavsini gösteren tıbbi illüstrasyon' }),
  disease(46, 'Tarsal Tünel Sendromu', 'tarsal-tunel-sendromu', 'ayak-bilek',
    'Ayak bileğinin iç kısmından geçen sinirin etkilenmesi ayak tabanında uyuşma, karıncalanma veya yanma hissine neden olabilir.',
    'Tibial sinir ve dalları ayak bileğinin iç tarafındaki tarsal tünel bölgesinden geçer. Sinirin bu bölgede baskı altında kalması ayak ve ayak tabanında sinir kaynaklı yakınmalar oluşturabilir.',
    ['Ayak tabanında uyuşma', 'Karıncalanma', 'Yanma hissi', 'Uzun süre ayakta kalınca artan yakınmalar', 'Ayak bileğinin iç kısmında rahatsızlık'],
    { heroImage: tarsalTunnelImage, heroImageAlt: 'Ayak bileği iç kısmında sıkışan tibial siniri gösteren tıbbi illüstrasyon' }),
  disease(47, 'Aşil Tendon Rüptürü', 'asil-tendon-rupturu', 'ayak-bilek',
    'Aşil tendonunun kısmen veya tamamen yırtılması yürüme ve ayağın itme hareketinde belirgin fonksiyon kaybına yol açabilir.',
    'Aşil tendon rüptürü, baldır kaslarını topuğa bağlayan tendonun bütünlüğünün bozulmasıdır. Ani ve kuvvetli hareketler sırasında ortaya çıkabilir ve tıbbi değerlendirme gerektirir.',
    ['Topuk arkasında ani ağrı', 'Yürümede zorlanma', 'Parmak ucuna yükselmede güçlük', 'Ayak bileğinde kuvvet kaybı', 'Şişlik ve hassasiyet'],
    { heroImage: achillesRuptureImage, heroImageAlt: 'Kopmuş Aşil tendonunu gösteren tıbbi illüstrasyon' }),
  disease(48, 'Düşük Ayak', 'dusuk-ayak', 'ayak-bilek',
    'Ayağı yukarı kaldırma hareketinin zayıflaması yürüyüş sırasında ayağın yerden yeterince kaldırılamamasına neden olabilir.',
    'Düşük ayak tek başına bir hastalık değil, farklı sinir veya kas problemlerine bağlı olarak ortaya çıkabilen bir bulgudur. Ayağın yukarı doğru kaldırılması zorlaşır ve kişinin yürüme biçimi değişebilir.',
    ['Ayağı yukarı kaldırmada güçlük', 'Yürürken ayağın yere takılması', 'Adım atış biçiminde değişiklik', 'Merdiven kullanımında zorlanma', 'Ayak ve bacakta eşlik eden güçsüzlük'],
    { heroImage: footDropImage, heroImageAlt: 'Ayağın yukarı kaldırılmasındaki zayıflığı ve ilgili siniri gösteren tıbbi illüstrasyon' }),

  disease(49, 'Temporomandibular Eklem Problemleri', 'temporomandibular-eklem-problemleri', 'cene',
    'Çene eklemi ve çevresindeki kasların etkilenmesi çene hareketlerinde ağrı, ses ve günlük fonksiyonlarda zorlanmayla birlikte görülebilir.',
    'Temporomandibular eklem, alt çeneyi kafatasına bağlayan ve konuşma, çiğneme, esneme gibi hareketlerde görev alan eklemdir. Eklem, çiğneme kasları veya çevredeki yapıların etkilenmesi çeşitli çene yakınmalarına neden olabilir.',
    ['Çene ve kulak çevresinde ağrı', 'Çene hareketleri sırasında ses veya takılma', 'Ağzı açmada zorlanma', 'Çiğneme sırasında rahatsızlık', 'Kulak çınlaması', 'Denge kaybı', 'Baş dönmesi', 'Gerilim tipi baş ağrısı', 'Yüz, baş veya boyun çevresinde eşlik eden gerginlik'],
    { showApproaches: false, heroImage: tmjImage, heroImageAlt: 'Çene eklemi diski ve çiğneme kaslarını gösteren tıbbi illüstrasyon' }),

  disease(50, 'Çınlama ve Uğultu', 'cinlama-ve-ugultu', 'cene',
    'Kulakta dışarıdan bir ses kaynağı olmadan çınlama, uğultu veya benzeri seslerin algılanması tinnitus olarak adlandırılır.',
    'Çınlama ve uğultu tek başına bir hastalık değil, farklı nedenlerle ortaya çıkabilen bir belirtidir. İşitme sistemiyle ilgili durumların yanı sıra bazı kişilerde çene eklemi, boyun kasları veya duruşla ilişkili etkenlerden de etkilenebilir. Nedenin belirlenmesi için öncelikle kulak burun boğaz uzmanı tarafından değerlendirme yapılması önemlidir.',
    ['Kulakta çınlama veya uğultu', 'Tek ya da iki kulakta ses algısı', 'Sesin şiddetinde zaman zaman değişiklik', 'Sessiz ortamlarda daha belirgin hissedilme', 'Uyku ve odaklanmada zorlanma'],
    { showApproaches: false, heroImage: tinnitusImage, heroImageAlt: 'Kulak, işitme yolu ve çene-boyun ilişkisini gösteren tıbbi illüstrasyon' }),

  disease(51, 'Denge Kaybı', 'denge-kaybi', 'cene',
    'Denge kaybı; ayakta dururken veya yürürken kararsızlık, savrulma ya da düşecekmiş gibi hissetme şeklinde görülebilir.',
    'Denge; iç kulak, görme, duyu sistemi, kas-iskelet sistemi ve sinir sisteminden gelen bilgilerin birlikte işlenmesiyle sağlanır. Denge kaybının nedeni farklı olabileceği için öncelikle uygun tıbbi değerlendirme yapılması gerekir; fizyoterapi planı değerlendirme sonucuna göre oluşturulabilir.',
    ['Ayakta dururken kararsızlık', 'Yürürken savrulma', 'Düşme korkusu', 'Ani yön değiştirirken zorlanma', 'Güvensiz yürüme'],
    { showApproaches: false, heroImage: balanceImage, heroImageAlt: 'Denge sisteminde iç kulak, görme ve vücut duyusunun ilişkisini gösteren tıbbi illüstrasyon' }),

  disease(52, 'Baş Dönmesi — Vertigo', 'bas-donmesi-vertigo', 'cene',
    'Baş dönmesi; kişinin kendisinin veya çevresinin dönüyor ya da hareket ediyor gibi algılanmasıyla ortaya çıkabilir.',
    'Baş dönmesi farklı nedenlerle gelişebilen bir belirtidir. İç kulak, nörolojik, dolaşımsal veya diğer tıbbi nedenlerin ayırt edilmesi önemlidir. Uygun görülen durumlarda vestibüler rehabilitasyon; bakış sabitleme, denge ve hareket toleransını geliştirmeye yönelik kişiye özel egzersizleri içerebilir.',
    ['Dönme hissi', 'Hareketle artan baş dönmesi', 'Bulantı', 'Dengesizlik', 'Bakışları sabitlemede zorlanma'],
    { showApproaches: false, heroImage: vertigoImage, heroImageAlt: 'İç kulaktaki denge organını ve vestibüler sistemi gösteren tıbbi illüstrasyon' }),

  disease(53, 'Gerilim Tipi Baş Ağrısı', 'gerilim-tipi-bas-agrisi', 'cene',
    'Gerilim tipi baş ağrısı çoğunlukla başın iki tarafında baskı veya sıkışma hissiyle görülen yaygın bir baş ağrısı türüdür.',
    'Baş ve boyun çevresinde baskı hissi, kas hassasiyeti ve stresle ilişkili artış görülebilir. Yeni başlayan, şiddetli veya alışılmadık baş ağrılarında öncelikle tıbbi değerlendirme gerekir; fizyoterapi yaklaşımı ancak uygun değerlendirme sonrasında planlanır.',
    ['Başın iki tarafında baskı hissi', 'Alın veya ense çevresinde sıkışma', 'Boyun ve omuzlarda gerginlik', 'Kas hassasiyeti', 'Stresle artabilen yakınmalar'],
    { showApproaches: false, heroImage: tensionHeadacheImage, heroImageAlt: 'Baş ve boyun çevresindeki gerilim bölgelerini gösteren tıbbi illüstrasyon' }),

  disease(54, 'Lenfödem', 'lenfodem', 'diger',
    'Lenf sıvısının dokularda birikmesi kol, bacak veya başka bir bölgede uzun süreli şişliğe ve ağırlık hissine neden olabilir.',
    'Lenfödem yönetimi kişiye göre planlanır. Uzman değerlendirmesi sonrasında cilt bakımı, uygun egzersiz, kompresyon uygulamaları ve gerekli durumlarda manuel lenf drenajı gibi yöntemler birlikte kullanılabilir. Amaç şişliği kontrol etmek, hareketi desteklemek ve kişinin öz yönetim becerilerini geliştirmektir.',
    ['Uzun süreli şişlik', 'Ağırlık veya gerginlik hissi', 'Hareketlerde kısıtlılık', 'Ciltte gerginlik', 'Giysi veya takıların sıkı gelmesi'],
    { showApproaches: false, heroImage: lymphedemaImage, heroImageAlt: 'Bacak lenf yollarını ve lenfödemdeki sıvı birikimini gösteren tıbbi illüstrasyon' }),

  disease(55, 'Lipödem', 'lipodem', 'diger',
    'Lipödem çoğunlukla bacaklarda, bazen kollarda iki taraflı ve orantısız yağ dokusu artışıyla görülebilen kronik bir durumdur.',
    'Lipödemde hassasiyet, ağrı, ağırlık hissi ve kolay morarma görülebilir; ayaklar genellikle etkilenmez. Yönetim kişinin belirtilerine göre planlanır ve eğitim, uygun hareket-egzersiz, cilt bakımı ile uzman değerlendirmesi sonrasında kompresyon seçeneklerini içerebilir.',
    ['İki taraflı orantısız doku artışı', 'Dokunmaya hassasiyet veya ağrı', 'Kolay morarma', 'Bacaklarda ağırlık hissi', 'Uzun süre ayakta kalmada zorlanma'],
    { showApproaches: false, heroImage: lipedemaImage, heroImageAlt: 'Bacaklardaki simetrik lipödem dağılımını gösteren tıbbi illüstrasyon' }),

  disease(56, 'Aletli Pilates — Reformer Pilates', 'aletli-pilates', 'diger',
    'Aletli pilates; yay direnci ve hareketli platform kullanılan reformer cihazıyla kuvvet, hareket kontrolü ve esnekliği desteklemeyi amaçlayan egzersiz yaklaşımıdır.',
    'Program kişinin hareket kapasitesi, hedefleri ve sağlık durumu değerlendirilerek planlanır. Egzersizlerin direnci, hareket aralığı ve zorluk düzeyi kontrollü biçimde ayarlanabilir; gerektiğinde fizyoterapi programının bir parçası olarak uygulanabilir.',
    ['Kuvvet ve dayanıklılığı geliştirme', 'Hareket kontrolünü destekleme', 'Esnekliği artırma', 'Duruş farkındalığı', 'Kişiye göre ayarlanabilir direnç'],
    { showApproaches: false, heroImage: reformerPilatesImage, heroImageAlt: 'Reformer cihazında kontrollü egzersiz yapan anatomik modeli gösteren tıbbi illüstrasyon' }),

  disease(57, 'Pelvik Taban Rehabilitasyonu', 'pelvik-taban-rehabilitasyonu', 'diger',
    'Pelvik taban rehabilitasyonu, pelvik taban kaslarının kasılma ve gevşeme işlevlerini değerlendiren ve kişiye özel egzersizlerle destekleyen fizyoterapi alanıdır.',
    'Değerlendirme sonrasında kas farkındalığı, doğru kasılma ve gevşeme, nefes koordinasyonu, mesane alışkanlıkları ve günlük yaşam düzenlemelerine yönelik kişiye özel bir program hazırlanabilir. Gerektiğinde biofeedback gibi destekleyici yöntemlerden yararlanılabilir.',
    ['İdrar kaçırma', 'Pelvik taban kaslarında güçsüzlük', 'Doğum sonrası yakınmalar', 'Pelvik bölgede ağrı veya gerginlik', 'Kasları doğru çalıştırmada zorlanma'],
    { showApproaches: false, heroImage: pelvicFloorImage, heroImageAlt: 'Pelvik taban kaslarının pelvis içindeki konumunu gösteren tıbbi illüstrasyon' }),
];

export function getTreatmentDetail(slug) {
  return treatments.find((item) => item.slug === slug) ?? null;
}
