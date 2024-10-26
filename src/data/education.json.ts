export const byName = [
  { name: "Universitas Pembangunan Nasional Veteran Jawa Timur", degree: "S1 Teknik Informatika", year: "2015 - 2019" },
  // { name: "SMAN 1 Surabaya", degree: "Ilmu Pengetahuan Alam (IPA)", year: "2012 - 2015" },
];

export const devwork = byName.map(education => ({
  title: education.name,
  degree: education.degree,
  year: education.year
}));
