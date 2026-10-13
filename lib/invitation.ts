// The ONLY file you need to edit for names, date, venue, contacts and link.

export const invitation = {
  bride: "Saleha",
  groom: "Nabeel Omer",
  monogram: "S & N",

  // Bismillah shown at the very top
  bismillah: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",

  // Hosts (the groom's parents) and the lines under each name
  hosts: "Mr. & Mrs. Khawaja Qaiser Ahmed",
  groomParents: "S/o Khawaja Qaiser Ahmed",
  brideParents: "D/o M. Waseem Akhtar",

  // Quran verse about marriage (Surah Ar-Rum 30:21)
  verse:
    "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them, and He placed between you love and mercy.",
  verseRef: "Surah Ar-Rum (30:21)",

  // Traditional dua for the newly married
  duaArabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
  duaMeaning:
    "May Allah bless you both, shower His blessings upon you, and unite you in goodness.",

  event: {
    title: "Nikkah Ceremony",
    day: "Friday",
    date: "23 October 2026",
    dayNumber: "23",
    monthYear: "October 2026",
    time: "7:30 PM",
    // Keep the +05:00 offset for Karachi
    startIso: "2026-10-23T19:30:00+05:00",
    endIso: "2026-10-23T23:00:00+05:00",
  },

  venue: {
    name: "Jauhar Arena",
    area: "Karachi",
    full: "Jauhar Arena, Karachi, Pakistan",
    mapsUrl: "https://maps.app.goo.gl/3ZqF3Pj51iVJFfDX6?g_st=aw",
  },

  contacts: [
    { name: "Khawaja Qaiser Ahmed", phone: "+923323417559", display: "0332 3417559" },
    { name: "Areeb Jalil", phone: "+923310332424", display: "0331 0332424" },
  ],

  // Set to your real live link after the first deploy
  siteUrl: "https://wedding-invitation.vercel.app",
};

export type Invitation = typeof invitation;