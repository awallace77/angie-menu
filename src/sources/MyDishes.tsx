import { MenuCategory } from "../data/MenuCategory";

export const myDishes = [
  // --- APPETIZERS ---
  {
    id: 100,
    img: "/images/aw/baked_brie.JPEG",
    price: 7,
    selected: false,
    subtitle: "Cranberry, toasted pecans, and balsamic glaze.",
    title: "Baked Brie",
    category: MenuCategory.Appetizer,
  },
  {
    id: 300,
    img: "/images/aw/beet-and-goat-cheese.jpg",
    price: 7,
    selected: false,
    subtitle: "Beet and goat cheese salad with balsamic and oil dressing.",
    title: "Beet and Goat Cheese Salad",
    category: MenuCategory.Appetizer,
  },
  {
    id: 700,
    img: "/images/aw/cucumber-sous-vide.PNG",
    price: 18,
    selected: false,
    subtitle:
      "An Alinea special, with Kuroge Wagyu, cucumber, honeydew, and lime sugar",
    title: "Cucumber Sous-Vide Wagyu",
    category: MenuCategory.Appetizer,
  },
  {
    id: 1000,
    img: "/images/aw/dill-and-spicy-jam-bites.jpg",
    price: 10,
    selected: false,
    subtitle:
      "Shrimp bites on on bed of creamy dill sauce and seaweed. Topped with spicy jam.",
    title: "Spicy Jam and Dill Bites",
    category: MenuCategory.Appetizer,
  },

  // --- MAINS ---
  {
    id: 800,
    img: "/images/aw/demi-filet-mignon.jpg",
    price: 28,
    selected: false,
    subtitle:
      "Beef tenderloin (AAA) served with creamy mashed potatoes, broccolini, and topped with a rich demi-glace.",
    title: "Filet Mignon",
    category: MenuCategory.Main,
  },
  {
    id: 900,
    img: "/images/aw/demi-shortrib.jpg",
    price: 22,
    selected: false,
    subtitle:
      "Fall-of-the-bone braised beef short ribs served with a rich demi-glace.",
    title: "Braised Beef Short Ribs",
    category: MenuCategory.Main,
  },
  {
    id: 10000,
    img: "/images/aw/surf-n-turf.jpg",
    price: 30,
    selected: false,
    subtitle:
      "Filet mignon, lobster, shrimp, and scallops over a bed of creamy mashed potatoes. Served with peppercorn sauce, garlic lemon sauce, and chimichurri.",
    title: "Surf-n-Turf",
    category: MenuCategory.Main,
  },
  {
    id: 600,
    img: "/images/aw/chicken-marsala.PNG",
    price: 21,
    selected: false,
    subtitle:
      "Chicken breast, potatoes, and broccoli, served with a savoury Marsala wine sauce.",
    title: "Chicken Marsala",
    category: MenuCategory.Main,
  },
  {
    id: 200,
    img: "/images/aw/baked-rigatoni-vodka.PNG",
    price: 18,
    selected: false,
    subtitle: "Baked rigatoni in a vodka rose sauce.",
    title: "Baked Rigatoni Vodka",
    category: MenuCategory.Main,
  },
  {
    id: 500,
    img: "/images/aw/carbonara.jpg",
    price: 16,
    selected: false,
    subtitle:
      "Classic Italian carbonara. Served with parmesan, bacon, and a creamy egg sauce.",
    title: "Linguine Carbonara",
    category: MenuCategory.Main,
  },
  {
    id: 2000,
    img: "/images/aw/gnocchi-alfredo.jpg",
    price: 15,
    selected: false,
    subtitle:
      "Classic gnocchi alfredo. Served with as much parmesan as you can handle.",
    title: "Gnocchi Alfredo",
    category: MenuCategory.Main,
  },
  {
    id: 4000,
    img: "/images/aw/lasagna.jpg",
    price: 18,
    selected: false,
    subtitle:
      "Quadruple stacked lasagna with ground beef, ricotta, spinach, mozzarella, and parmesan.",
    title: "Ricotta, Spinach, and Meat Lasagna",
    category: MenuCategory.Main,
  },
  {
    id: 11000,
    img: "/images/aw/tortellini-feta-bomb.PNG",
    price: 18,
    selected: false,
    subtitle: "3-cheese tortellini in a spicy feta and cherry bomb sauce.",
    title: "Tortellini Feta Bomb",
    category: MenuCategory.Main,
  },
  {
    id: 5000,
    img: "/images/aw/linguine-pescatore.PNG",
    price: 20,
    selected: false,
    subtitle:
      "A classic Italian pasta with clams, mussels, shrimp, and scallops in a tomato & white wine sauce.",
    title: "Linguine Pescatore",
    category: MenuCategory.Main,
  },
  {
    id: 3000,
    img: "/images/aw/green-apple-salmon.jpg",
    price: 17,
    selected: false,
    subtitle: "Pan seared salmon topped with refreshing sweet apple.",
    title: "Sweet Green Apple Salmon",
    category: MenuCategory.Main,
  },
  {
    id: 7000,
    img: "/images/aw/persillade-salmon.jpg",
    price: 18,
    selected: false,
    subtitle: "Pan seared salmon on a bed of rice and persillade.",
    title: "Salmon Persillade",
    category: MenuCategory.Main,
  },
  {
    id: 8000,
    img: "/images/aw/pistachio-ube-salmon.jpg",
    price: 22,
    selected: false,
    subtitle:
      "Pistachio crusted salmon on a bed of rice and coconut ube. Topped with a blackberry reduction drizzle.",
    title: "Pistachio Crusted Salmon",
    category: MenuCategory.Main,
  },
  {
    id: 9000,
    img: "/images/aw/salmon-piccata.jpg",
    price: 20,
    selected: false,
    subtitle: "Pan seared salmon, drowned in a traditional piccata sauce.",
    title: "Salmon Piccata",
    category: MenuCategory.Main,
  },

  {
    id: 12000,
    img: "/images/aw/ube-salmon.JPEG",
    price: 18,
    selected: false,
    subtitle: "Miso-maple glazed salmon resting on a bed of coconut ube paste.",
    title: "Miso-Maple Glazed Salmon",
    category: MenuCategory.Main,
  },

  // --- DESSERTS ---
  {
    id: 400,
    img: "/images/aw/brownie.jpg",
    price: 5,
    selected: false,
    subtitle:
      "Classic brownie with chocolate chunks. Served with vanilla ice-cream.",
    title: "Chocolate Brownie Extreme",
    category: MenuCategory.Dessert,
  },
  {
    id: 6000,
    img: "/images/aw/pecan-pie.jpg",
    price: 8,
    selected: false,
    subtitle:
      "Toasted pecans, a pie - what more could you want. Served with vanilla ice-cream.",
    title: "Pecan Pie",
    category: MenuCategory.Dessert,
  },
  {
    id: 7000,
    img: "/images/aw/angie-logo2.png",
    price: 10000,
    selected: false,
    subtitle: "Whatever your heart desires.",
    title: "Your pick",
    category: MenuCategory.Dessert,
  },
];
