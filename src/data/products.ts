import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Crispy Chicken",
    category: "Chicken Burgers",
    price: 60,
    rating: 4.0,
    quantity: 10,
    image: "/crispy.PNG",
    shortDesc: "Chicken breast, chili sauce, tomatoes, pickles, coleslaw",
    fullDesc: "Our signature crispy chicken burger — juicy chicken breast fried to golden perfection, topped with our special house-made chili sauce, fresh tomatoes, crisp pickles, and creamy coleslaw. Served on a perfectly toasted bun.",
    specs: "150g chicken patty • Sesame seed bun • 450 calories"
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    category: "Beef Burgers",
    price: 70,
    rating: 4.5,
    quantity: 8,
    image: "/bacon.PNG",
    shortDesc: "House patty, cheddar cheese, bacon, onion, mustard",
    fullDesc: "A beef lover's dream — juicy 100% beef patty, melted cheddar cheese, crispy bacon strips, fresh red onions, and tangy mustard. Simple, classic, absolutely delicious.",
    specs: "180g beef patty • Brioche bun • 520 calories"
  },
  {
    id: 3,
    name: "Black Sheep",
    category: "Signature Burgers",
    price: 110,
    rating: 5.0,
    quantity: 4,
    image: "/blacksheep.PNG",
    shortDesc: "American cheese, tomato, relish, avocado, lettuce, red onion",
    fullDesc: "Our most unique creation — black sesame bun with creamy avocado, fresh lettuce, ripe tomatoes, red onions, and a special house relish. Bold, fresh, and unforgettable.",
    specs: "160g beef patty • Black sesame bun • 480 calories"
  }
];

export default products;