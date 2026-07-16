const bride = {
  name: "Baby Rinsha",
  shortName: "Rinsha",
  father: "Jabir",
  mother: "Sumayya",
  address: "Madathingal house, south puthalam, areakode, malappuram",
  monogram: "R",
};

const groom = {
  name: "Fasil Nalakath",
  shortName: "Fasil",
  father: "Akbar EP",
  mother: "Sakeena V",
  address: "Bicha's, Idiyangara, Malappuram",
  monogram: "F",
  phone: "+917902905061",
  phoneDisplay: "+91 79029 05061",
};

export const wedding = {
  bride,
  groom,
  display: {
    initials: `${groom.monogram} & ${bride.monogram}`,
    coupleShort: `${groom.shortName} & ${bride.shortName}`,
    coupleFull: `${groom.name} & ${bride.name}`,
    documentTitle: `${groom.shortName} & ${bride.shortName} | Wedding Invitation`,
    metaDescription: `${groom.name} & ${bride.name} — You are cordially invited to the wedding reception on 09 August 2026 at Sagar East Avenue Auditorium, Vadakkummuri, Malappuram.`,
    ogTitle: `${groom.shortName} & ${bride.shortName} — Wedding Invitation`,
    ogSiteName: `${groom.shortName} & ${bride.shortName} Wedding`,
  },
  weddingDate: "2026-07-29T11:00:00",
  dateDisplay: "Monday, 09 August 2026",
  schedule: {
    receptionLabel: "Reception",
  },
  tagline: "With hearts full of joy, we invite you to share in our happiness",
  invitation: {
    headline: "You are cordially invited",
    subline: `to the wedding of ${groom.name} & ${bride.name}`,
    hostLine: "With the blessings of Allah, we invite you to share in our joy",
  },
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTranslation:
    "In the name of Allah, the Most Gracious, the Most Merciful",
  quranVerse: {
    surah: "Az-Zumar",
    ayah: 6,
    reference: "Surah Al-Baqarah · 2:187",
    arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
    translation: "They are a garment for you, and you are a garment for them.",
  },
  images: {
    hero: "/images/hero-couple-veil.jpg",
    introCouple: "/images/bg-couple.png",
    coupleSection: "/images/couple-center.png",
    og: "/og-preview.png",
    quran:
      "https://images.unsplash.com/photo-1591604466107-d94487557561?auto=format&fit=crop&w=1920&q=80",
  },
  venue: {
    name: "Sagar East Avenue Auditorium",
    area: "Vadakkummuri",
    city: "Malappuram",
    state: "Kerala",
    full: "Sagar East Avenue Auditorium, Vadakkummuri, Malappuram",
    address: "Sagar East Avenue Auditorium, Vadakkummuri, Malappuram, Kerala",
    landmark: "Vadakkummuri, Malappuram",
    mapsQuery: "Sagar East Avenue Auditorium, Vadakkummuri, Malappuram, Kerala",
    mapsUrl: "https://maps.app.goo.gl/yHMV447Nszi3Fubp9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.7897436492185!2d76.0533506!3d11.2525177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647e3c82a80e9%3A0x3f6817dca7986889!2sSagar%20East%20Avenue%20Auditorium!5e1!3m2!1sen!2sin!4v1784196256478!5m2!1sen!2sin",
  },
  sections: {
    venue: {
      label: "Find Us",
      title: "The Venue",
      subtitle: "Directions to our celebration venue",
    },
    story: {
      label: "A Note from Our Family",
      title: "With Love & Dua",
    },
    quran: {
      eyebrow: "From the Quran",
    },
  },
  story: {
    title: "A Note from Our Family",
    paragraphs: [
      `It is with immense joy and gratitude to Allah that we announce the wedding of our beloved son ${groom.name} to ${bride.name}.`,
      "We would be honoured to have you with us on this blessed day — to share in our happiness and bless them as they begin this beautiful chapter together.",
    ],
  },
  contact: {
    hostLabel: "For enquiries, please contact the bride's family",
    phones: [
      // { phone: groom.phone, phoneDisplay: groom.phoneDisplay },
      { phone: "+917592978136", phoneDisplay: "+91 75929 78136" },
      // { phone: "+919526374444", phoneDisplay: "+91 95263 74444" },
    ],
  },
};
