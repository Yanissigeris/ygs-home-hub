import type { Review } from "./reviews";

export const reviewsEn: Review[] = [
  // — Sellers —
  {
    id: "s1",
    name: "Sylvie",
    location: "Gatineau",
    category: "seller",
    short: "This is the second time I've used his services and I'm always very satisfied. Yanis is very professional, respectful, honest and trustworthy. Understanding and dedicated. I highly recommend him. Thank you again for everything.",
    full: "This is the second time I've used his services and I'm always very satisfied. Yanis is very professional, respectful, honest and trustworthy. Understanding and dedicated. I highly recommend him. Thank you again for everything.",
    rating: 5,
  },
  {
    id: "s2",
    name: "Camelia",
    location: "Gatineau/Aylmer",
    category: "seller",
    short: "I recommend Yanis G-S if you want to sell your home. Always quick to respond and stays in touch at all times. Thank you Yanis for your work!",
    full: "I recommend Yanis G-S if you want to sell your home. Always quick to respond and stays in touch at all times. Thank you Yanis for your work!",
    rating: 5,
  },
  {
    id: "s3",
    name: "Nathalie B.",
    location: "Aylmer",
    category: "seller",
    short: "Coordinating a sale and purchase was stressful, but Yanis orchestrated everything perfectly.",
    full: "We had to sell and buy at the same time — a logistical nightmare. Yanis coordinated both transactions, managed the timelines and kept everyone calm. At no point did we feel lost or rushed. A true professional.",
    rating: 5,
  },

  // — Buyers —
  {
    id: "b1",
    name: "Geneviève and Salah",
    location: "Aylmer",
    category: "buyer",
    short: "Seriously, I'm so glad I found Yanis! He made our first home purchase as smooth as possible despite the stress and small issues my husband and I encountered. He gave us great advice and I recommend him to everyone! Thank you again Yanis!",
    full: "Seriously, I'm so glad I found Yanis! He made our first home purchase as smooth as possible despite the stress and small issues my husband and I encountered. He gave us great advice and I recommend him to everyone! Thank you again Yanis!",
    rating: 5,
  },
  {
    id: "b2",
    name: "Isabelle",
    location: "Aylmer",
    category: "buyer",
    short: "I highly recommend Yanis as an agent. We worked with him to buy our first home and wow — exceptional service and truly listening to our needs! Thank you for everything Yanis!",
    full: "I highly recommend Yanis as an agent. We worked with him to buy our first home and wow — exceptional service and truly listening to our needs! Thank you for everything Yanis!",
    rating: 5,
  },
  {
    id: "b3",
    name: "Émilie G.",
    location: "Hull",
    category: "buyer",
    short: "Strong negotiation and honest advice — Yanis saved me thousands.",
    full: "Yanis advised me NOT to overbid on a property that had hidden issues. He then found a better option and negotiated an excellent price. It's rare to find a broker who tells you not to buy when it's not the right deal.",
    rating: 5,
  },

  // — Relocation —
  {
    id: "r1",
    name: "Alexandre",
    location: "Aylmer/Gatineau",
    category: "relocation",
    short: "Excellent availability, patient and honest. I highly recommend him for buying or selling.",
    full: "Excellent availability, patient and honest. I highly recommend him for buying or selling.",
    rating: 5,
  },
  {
    id: "r2",
    name: "John",
    location: "Ottawa → Gatineau",
    category: "relocation",
    short: "As an Ontario buyer, I'm very satisfied with the valuable help Yanis provided when purchasing my condo in Gatineau! He knows the local market perfectly and knows how to make the best possible offer for competitive properties in Québec. Thank you so much Yanis, I highly recommend you!",
    full: "As an Ontario buyer, I'm very satisfied with the valuable help Yanis provided when purchasing my condo in Gatineau! He knows the local market perfectly and knows how to make the best possible offer for competitive properties in Québec. Thank you so much Yanis, I highly recommend you!",
    rating: 5,
  },

  // — Military —
  {
    id: "m1",
    name: "Cpl. Patrick H.",
    location: "Petawawa → Gatineau",
    category: "military",
    short: "Quick posting — Yanis handled everything remotely. We bought before even arriving.",
    full: "With a short-notice posting, we didn't have time to search in person. Yanis organized virtual tours, answered all our questions about neighborhoods near the base, and finalized the purchase before we arrived. Impressive.",
    rating: 5,
  },
  {
    id: "m2",
    name: "Sgt. Amélie D.",
    location: "Valcartier → Gatineau",
    category: "military",
    short: "Yanis understands military realities. Sale and purchase coordinated without stress.",
    full: "Third posting in 6 years — we know the stress. Yanis was by far the best broker we've had. He understood our reality, coordinated the sale and purchase simultaneously, and everything was done on time. A true professional.",
    rating: 5,
  },

  // — Plex / Investors —
  {
    id: "p1",
    name: "Alain P.",
    location: "Hull",
    category: "plex",
    short: "Thorough and honest analysis — Yanis kept me from making a bad investment.",
    full: "I was looking at a duplex that seemed like a good deal. Yanis did a detailed analysis and showed me the actual revenues didn't justify the asking price. We found a much better investment two weeks later. His rigor saved me big.",
    rating: 5,
  },
  {
    id: "p2",
    name: "Stéphane and Julie R.",
    location: "Gatineau",
    category: "plex",
    short: "Sold our triplex at the best price thanks to a precise marketing strategy.",
    full: "We thought selling an occupied plex would be complicated. Yanis managed tenant coordination, documentation and showings with professionalism. The result exceeded our expectations — better price than we hoped for.",
    rating: 5,
  },
];

export const getReviewsByCategoryEn = (category: Review["category"]) =>
  reviewsEn.filter((r) => r.category === category);

export const getReviewsByIdEn = (ids: string[]) =>
  ids.map((id) => reviewsEn.find((r) => r.id === id)!).filter(Boolean);
