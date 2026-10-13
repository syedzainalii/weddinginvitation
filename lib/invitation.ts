// The ONLY file you need to edit for names, date, venue, contacts and link.

export const invitation = {
  bride: "Saleha",
  groom: "Nabeel Omer",
  monogram: "S & N",

  brideParents: "Daughter of Mr. & Mrs. (Bride's Father)", // <- your text
  groomParents: "Son of Mr. & Mrs. (Groom's Father)", // <- your text

  message:
    "With the blessings of Allah, we joyfully invite you to witness and celebrate the Nikkah of our beloved children.",

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
    name: "Venue Name", // <- your venue
    area: "Area, Karachi", // <- your area
    full: "Venue Name, Area, Karachi, Pakistan", // <- your full address
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