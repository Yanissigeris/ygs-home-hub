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
    name: "Jessica",
    location: "Aylmer",
    category: "seller",
    short: "I had a wonderful experience working with Yanis during the sale of my house. From start to finish, he was professional, knowledgeable, and incredibly supportive throughout the process.",
    full: "I had a wonderful experience working with Yanis during the sale of my house. From start to finish, he was professional, knowledgeable, and incredibly supportive throughout the process. He took the time to explain every step, answered all my questions, and ensured that what could have been a stressful experience went smoothly and was entirely pleasant.\n\nHis marketing strategy, attention to detail, and dedication really stood out. My house was beautifully showcased and immediately attracted strong interest. I always felt my interests were his top priority, and his communication was excellent throughout the process.\n\nI am extremely grateful for his hard work and highly recommend him to anyone looking to buy or sell a home. If you're looking for someone reliable, professional, and who genuinely cares about their clients, Yanis is the perfect choice!",
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
    name: "Christian",
    location: "Hull",
    category: "buyer",
    short: "Working with Yanis was an outstanding experience from start to finish. He was professional, responsive, and incredibly knowledgeable about the market.",
    full: "Working with Yanis was an outstanding experience from start to finish. He was professional, responsive, and incredibly knowledgeable about the market. Every step of the process was smooth, and he always made sure we felt informed and confident in our decisions. His dedication and attention to detail was truly astonishing. I would highly recommend Yanis to anyone looking to buy or sell a home!",
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
    name: "Clarisse",
    location: "Hull",
    category: "plex",
    short: "Wow\nIt's seen, it's sold, just one day.\nUnbelievable yet true.\nThank you again Yanis, for your efficiency and professionalism\n\nClarisse",
    full: "Wow\nIt's seen, it's sold, just one day.\nUnbelievable yet true.\nThank you again Yanis, for your efficiency and professionalism\n\nClarisse",
    rating: 5,
  },
  {
    id: "p2",
    name: "Abdoulaye",
    location: "Gatineau",
    category: "plex",
    short: "A big thank you, Yanis Sigeris, for your support throughout the sale of our duplex. You were a tremendous help from start to finish, and we obtained a good price in a short time. ",
    full: "A big thank you, Yanis Sigeris, for your support throughout the sale of our duplex. You were a tremendous help from start to finish, and we obtained a good price in a short time. ",
    rating: 5,
  },
];

export const getReviewsByCategoryEn = (category: Review["category"]) =>
  reviewsEn.filter((r) => r.category === category);

export const getReviewsByIdEn = (ids: string[]) =>
  ids.map((id) => reviewsEn.find((r) => r.id === id)!).filter(Boolean);
