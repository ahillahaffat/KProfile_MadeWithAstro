export const education = [
  { 
    school: "Universitas Pembangunan Nasional \"Veteran\" Jawa Timur",
    period: "August 2021 - June 2025",
    degree: "Bachelor of Informatics, Faculty of Computer Science",
    gpa: "3.85 / 4.00",
    link: { label: "Transcript", href: "https://drive.google.com/file/d/1DWDKt_Z8CTbQnByrc6z3EZeGKE2OfZQz/view?usp=sharing" },
  },
];

export const devwork = education.map(education => ({
  school: education.school,
  degree: education.degree,
  period: education.period,
  gpa: education.gpa,
  link: education.link,
}));
