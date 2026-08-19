export const imagesCompany = {
  if: {
    src: "/if.png",
    alt: "IF",
  },

  molca: {
    src: "/molca.png",
    alt: "Molca Teknologi Nusantara",
  },

  kemenkeu: {
    src: "/kemenkeu.png",
    alt: "Kementerian Keuangan Republik Indonesia",
  },

  dicoding: {
    src: "/dicoding1.png",
    alt: "Dicoding",
  },
} as const;

export function getImage(name: keyof typeof imagesCompany) {
  return imagesCompany[name];
}