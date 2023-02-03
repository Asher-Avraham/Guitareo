import {
  atkin1,
  atkin2,
  atkin3,
  atkin4,
  gibsonLg21,
  gibsonLg22,
  gibsonLg23,
  gibsonLg24,
  gibsonSj2001,
  gibsonSj2002,
  gibsonSj2003,
  gibsonSj2004,
  guildD401,
  guildD402,
  guildD403,
  guildD404,
  martinD281,
  martinD282,
  martinD283,
  martinD284,
  martinD421,
  martinD422,
  martinD423,
  martinD424,
  taylor912ce1,
  taylor912ce2,
  taylor912ce3,
  taylor912ce4,
  taylorGsMiniKoa1,
  taylorGsMiniKoa2,
  taylorGsMiniKoa3,
  taylorGsMiniKoa4,
} from "../photos/acousticGuitars";

export type GuitarType = {
  key?: number;
  photo: string[];
  title: string;
  avgRating: number;
  amountRatings: number;
  description: string;
  specs: {
    bodyShape: string;
    topWood: string;
    backAndSides: string;
    bracing: string;
    neckWood: string;
    neckShape: string;
    radius: string;
    fingerBoardMaterial: string;
    nutSaddleMaterial: string;
    nutWidth: string;
    electronics: string;
  };
  tags: string[];
};

type GuitarsType = GuitarType[];
export const guitars: GuitarsType = [
  {
    photo: [atkin1, atkin2, atkin3, atkin4],
    title: "Atkin 0-12 fret",
    avgRating: 4.5,
    amountRatings: 2,
    description:
      "The Atkin Dustbowl O12s has a Mahogany Top, Mahogany Back & Sides, Mahogany Neck, Indian Rosewood Fingerboard & Bridge, Open Gear Tuners.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Atkin", "Parlor", "0"],
  },
  {
    photo: [gibsonLg21, gibsonLg22, gibsonLg23, gibsonLg24],
    title: "Gibson LG2 50s",
    avgRating: 3.5,
    amountRatings: 7,
    description:
      "The Gibson '50s LG-2 is a small-bodied acoustic with a full-sized Gibson sound. This little giant produces a charming and seductive tone that rivals much larger-bodied guitars while maintaining exceptional clarity and focus in individual notes. Ideal for folk, blues and fingerstyle, the delicately balanced 1950s LG-2 Original maintains a full dynamic range while being comfortable under arm. Handcrafted solid tone wood and scalloped top bracing provide the warmth and richness that have made spruce and mahogany a classic combination in acoustic flat-top guitars.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Gibson", "00"],
  },
  {
    photo: [gibsonSj2001, gibsonSj2002, gibsonSj2003, gibsonSj2004],
    title: "Gibson SJ200",
    avgRating: 5,
    amountRatings: 1,
    description:
      "Originally released in 1937, the widely played Gibson SJ-200 is considered to be the King of the Flat-Tops. The most striking features of the new SJ-200 Original include the carved four bar Moustache bridge, an engraved tortoise pickguard, mother-of-pearl crown fretboard and headstock inlay and exquisite flamed maple back and sides. The SJ-200 is an American original with its shape and elegant appearance.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Gibson", "Jumbo"],
  },
  {
    photo: [guildD401, guildD402, guildD403, guildD404],
    title: "Guild D40",
    avgRating: 3.5,
    amountRatings: 1,
    description:
      "D-40 Traditional Acoustic Guitar Natural. The Guild D-40 Traditional embodies the features that have made the D-40 one of Guild's most beloved and revered models. Using a high-grade solid Sitka spruce top and solid African mahogany back and sides, Guild adds scalloped Adirondack braces for power, nuance and responsiveness. The D-40 Traditional's three piece mahogany and walnut neck is topped with an Indian rosewood fingerboard and is joined to the body with an authentic dovetail joint. This classic dreadnought is handsomely appointed with a tortoiseshell pickguard, rosette and binding, a genuine mother-of-pearl Guild Peak and Chesterfield logo inlaid on the headstock, and nickel-plated open gear tuners. A lustrous nitrocellulose lacquer provides an elegant finish to this masterpiece, optimizing the beauty and resonant qualities of its premium woods. Each D-40 Traditional includes a hand-signed, numbered certificate of authenticity, and ships with a Guild humidified hardshell case. Natural top, also available in Antique Sunburst. Proudly made in the USA.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Guild", "Dreadnought"],
  },
  {
    photo: [martinD281, martinD282, martinD283, martinD284],
    title: "Martin D28",
    avgRating: 4.5,
    amountRatings: 27,
    description:
      "Many discerning guitarists instantly name the D-28 as their all-time favorite Martin; it is the standard to which all acoustic guitars are compared. Affectionately dubbed the tone cannon, the D-28 deploys classic rich tone and powerful projection that's perfect for stage and studio. Martin has re-imagined the D-28, blending the rich legacy of the guitar with their latest innovations. Vintage appointments include open-gear tuners, an aged toner top, antique white accents, and faux tortoise pickguard. Forward-shifted bracing allows for greater vibration of the top, while a modern neck profile gives you improved comfort and playability. We spend a lot of time with acoustic guitars at Sweetwater, and this D-28 delivers the iconic Martin sound by the boatload.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Martin", "Dreadnought"],
  },
  {
    photo: [martinD421, martinD422, martinD423, martinD424],
    title: "Martin D42",
    avgRating: 5,
    amountRatings: 4,
    description:
      "The latest Martin D-42, with its iconic prewar Style 45 snowflake inlays and heirloom visuals, looks, plays, and sounds better than ever. This D-42's High Performance Taper mahogany neck delivers modern playability without disrupting the iconic Martin dreadnought strum. Its high-grade spruce top with aged toner finish looks and sounds like an antique dream; underneath, forward-shifted, scalloped X-bracing enhances bass for a big, resonant bottom end. Butterbean gold open-gear tuners, abalone inlays, and antique white binding complete the look.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Martin", "Dreadnought"],
  },
  {
    photo: [taylor912ce1, taylor912ce2, taylor912ce3, taylor912ce4],
    title: "Taylor 912ce V-class",
    avgRating: 4.5,
    amountRatings: 1,
    description:
      "One of Taylor’s most popular lines, the 912ce offers players incredible tone, playability, and comfort. The 912ce features a smaller Grand Concert body style and 24-7/8 scale length that make it beautifully playable and travel-friendly. The 912ce begins with a solid Sitka spruce top and rosewood back and sides — a legendary tonewood pairing that produces stellar tone that is full, varied, and robust. A tropical mahogany neck with West African ebony fingerboard offers wonderful response and playability. And when you plug in, onboard ES2 electronics deliver outstanding amplified acoustic tone.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Taylor", "Concert", "00"],
  },
  {
    photo: [
      taylorGsMiniKoa1,
      taylorGsMiniKoa2,
      taylorGsMiniKoa3,
      taylorGsMiniKoa4,
    ],
    title: "Taylor Gs mini-e koa plus",
    avgRating: 3.5,
    amountRatings: 8,
    description:
      "If you’ve been wishing for a Taylor GS Mini-e with upgraded features, then the Taylor GS Mini-e Koa Plus is what you’re looking for. Featuring a solid koa top with layered koa back and sides, this acoustic creates a sweet tone with a rich, sparkling texture. Desired for its beautiful figuring and unmatched tonal characteristics, koa is one of the most coveted tonewoods in the world. The GS Mini-e Koa Plus has a smaller body size that makes it incredibly comfortable to play in the studio or under stage lights. This miniature acoustic-electric is completed by Taylor’s acclaimed ES2 electronics for a clear, natural tone. The Taylor GS Mini-e Koa Plus is sure to be the go-to acoustic guitar in your arsenal.",
    specs: {
      bodyShape: "Grand Symphony Mini",
      topWood: "Hawaiian Koa",
      backAndSides: "Layered Koa",
      bracing: "X-bracing",
      neckWood: "Tropical Mahogany",
      neckShape: "Standard Carve",
      radius: '15"',
      fingerBoardMaterial: "Ebony",
      nutSaddleMaterial: "NuBone/NuBone",
      nutWidth: '1.6875"',
      electronics: "ES-2",
    },
    tags: ["Acoustic", "Taylor", "Travel"],
  },
];

export type ReviewType = {
  key?: number;
  author: string;
  date: string;
  photo: any;
  title: string;
  userRating: number;
  review: string;
  tags: string[];
};

type ReviewsType = ReviewType[];

export const reviews: ReviewsType = [
  {
    author: "Asher Avraham",
    date: "today 23, 2023",
    photo: taylorGsMiniKoa2,
    title: "Taylor Gs mini-e koa plus",
    userRating: 4,
    review:
      "This guitar is beautiful, small and mighty. I could not find one in my area to play before buying but did try an acoustic gs mini and felt confident that the koa was gonna be amazing. It’s so satisfying to play this guitar. It’s small which I love. I’m a tiny person and have a hard time with bigger guitars. But there is no compromise on sound because of the size. The sound is rich and very full bodied. The pick ups when plugged in sound fantastic too. Love this guitar so much.",
    tags: ["Acoustic", "Taylor", "Travel"],
  },
  {
    author: "Asher Avraham",
    date: "today 23, 2023",
    photo: martinD282,
    title: "Martin D28",
    userRating: 5,
    review:
      "This guitar is beautiful, small and mighty. I could not find one in my area to play before buying but did try an acoustic gs mini and felt confident that the koa was gonna be amazing. It’s so satisfying to play this guitar. It’s small which I love. I’m a tiny person and have a hard time with bigger guitars. But there is no compromise on sound because of the size. The sound is rich and very full bodied. The pick ups when plugged in sound fantastic too. Love this guitar so much.",
    tags: ["Acoustic", "Taylor", "Travel"],
  },
];
