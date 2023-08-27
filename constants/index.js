// Dummy data pour les utilisateurs
const users = [
  {
    id: 1,
    username: "alice_smith",
    email: "alice@example.com",
    password: "hashed_password",
    role: "user",
    image: "https://avatars.githubusercontent.com/u/81866624?v=4",
    alt: "Alice Smith",
  },
];

// Dummy data pour les catégories
const categories = [
  {
    id: 1,
    name: "Offres",
    image: require("../assets/images/category/offres.png"),
    alt: "Offres",
  },
  {
    id: 2,
    name: "Resataurants",
    image: require("../assets/images/category/restaurants.png"),
    alt: "Resataurants",
  },
  {
    id: 3,
    name: "Courses",
    image: require("../assets/images/category/courses.png"),
    alt: "Courses",
  },
  {
    id: 4,
    name: "Cafés",
    image: require("../assets/images/category/cafe.png"),
    alt: "Cafés",
  },
  {
    id: 5,
    name: "Courses",
    image: require("../assets/images/category/courses.png"),
    alt: "Courses",
  },
  {
    id: 6,
    name: "Boulangeries",
    image: require("../assets/images/category/boulangerie.png"),
    alt: "Boulangeries",
  },
  {
    id: 7,
    name: "Santé et bien-être",
    image: require("../assets/images/category/sante-et-bien-etre.png"),
    alt: "Santé et Bien-être",
  },
  {
    id: 8,
    name: "Fast Food",
    image: require("../assets/images/category/Fast-food.png"),
    alt: "Fast Food",
  },
  {
    id: 9,
    name: "Produits frais",
    image: require("../assets/images/category/produits-frais.png"),
    alt: "Produits frais",
  },
  {
    id: 10,
    name: "Boissons",
    image: require("../assets/images/category/Boissons.png"),
    alt: "Boissons",
  },
];

// Dummy data pour les restaurants
const restaurants = [
  {
    name: "Restaurant Le Lagon 1",
    description: "Cuisine raffinée avec vue sur l'océan.",
    lat: 14.7218,
    long: -17.4724,
    address: "Petite Corniche Est, Dakar",
    opening_hours: "10:00 - 22:00",
    owner_id: 1,
    category: "Restaurants",
    image: require("../assets/images/resto/le-lagon.jpeg") ,
    alt: "Restaurant Le Lagon 1",
  },
  {
    name: "La Parrilla",
    description: "Steakhouse offrant des grillades de qualité.",
    lat: 14.6853,
    long: -17.4452,
    address: " Rue Place 18, Dakar",
    opening_hours: "12:00 - 23:00",
    owner_id: 2,
    category: "Restaurants",
    image: require("../assets/images/resto/la-parilla.jpeg") ,
    alt: "La Parrilla",
  },
  {
    name: "Le Cabanon Dakar",
    description: "Cuisine sénégalaise traditionnelle dans un cadre convivial.",
    lat: 14.6885,
    long: -17.4429,
    address: "Cor des Almadies, Dakar",
    opening_hours: "11:00 - 21:00",
    owner_id: 3,
    category: "Restaurants",
    image: require("../assets/images/resto/le-cabanone.jpeg") ,
    alt: "Le Cabanon Dakar",
  },
  {
    name: "Alkimia",
    description:
      "Expérience gastronomique fusionnant les saveurs locales et internationales.",
    lat: 14.6941,
    long: -17.4627,
    address: " Rte des Almadies, Dakar",
    opening_hours: "18:00 - 00:00",
    owner_id: 4,
    category: "Restaurants",
    image: require("../assets/images/resto/alkimia.jpeg") ,
    alt: "Alkimia",
  },
  {
    name: "Le Coste",
    description: "Vue panoramique et plats délicieux en bord de mer.",
    lat: 14.7002,
    long: -17.4826,
    address: "1, Place de l’indépendance",
    opening_hours: "09:00 - 23:00",
    owner_id: 5,
    category: "Restaurants",
    image: require("../assets/images/resto/le-coste.jpeg") ,
    alt: "Le Coste",
  },
  {
    name: "Restaurant New Africa",
    description: "Cuisine locale et internationale avec vue sur l'océan.",
    lat: 14.6939,
    long: -17.4608,
    address: "Sacré Coeur 3 Sicap Sacré Coeur 3, Dakar",
    opening_hours: "08:00 - 21:00",
    owner_id: 6,
    category: "Restaurants",
    image: require("../assets/images/resto/resto-new-africa.jpeg") ,
    alt: "Restaurant New Africa",
  },
  {
    name: "Ciao Italia restaurant",
    description:
      "Authentique cuisine italienne dans une atmosphère accueillante.",
    lat: 14.6857,
    long: -17.4435,
    address: "21 Rue Huart, Dakar",
    opening_hours: "12:00 - 22:00",
    owner_id: 7,
    category: "Restaurants",
    image: require("../assets/images/resto/ciao-italia-resto.jpeg") ,
    alt: "Ciao Italia restaurant",
  },
  {
    name: "Restaurant Le Dagorne",
    description: "Ambiance décontractée et plats variés pour tous les goûts.",
    lat: 14.6928,
    long: -17.4676,
    address: "11, Rue Dagorne Marché Kermel BP, Rue Dagorne",
    opening_hours: "10:30 - 23:30",
    owner_id: 8,
    category: "Restaurants",
    image: require("../assets/images/resto/le-dagorne.jpeg") ,
    alt: "Restaurant Le Dagorne",
  },
  {
    name: "La Cabane du Pêcheur",
    description: "Spécialités de fruits de mer et vue sur le port.",
    lat: 14.6947,
    long: -17.4711,
    address: "Ndeureuhnou, Dakar",
    opening_hours: "11:00 - 20:00",
    owner_id: 9,
    category: "Restaurants",
    image: require("../assets/images/resto/la-cabane-du-pecheur.jpeg") ,
    alt: "La Cabane du Pêcheur",
  },
  {
    name: "La Fourchette",
    description: "Variété de plats internationaux dans une ambiance moderne.",
    lat: 14.7009,
    long: -17.489,
    address: "4 Rue de Thann, Dakar",
    opening_hours: "09:00 - 22:00",
    owner_id: 10,
    category: "Restaurants",
    image: require("../assets/images/resto/la-fourchette.jpeg") ,
    alt: "La Fourchette",
  },
  {
    name: "Reine Margarita",
    description: "Pizzas authentiques préparées avec des ingrédients frais.",
    lat: 14.6896,
    long: -17.4563,
    address: "Rte de l'Aeroport, Dakar",
    opening_hours: "11:30 - 21:30",
    owner_id: 11,
    category: "Restaurants",
    image: require("../assets/images/resto/reine-margarita.jpeg") ,
    alt: "Reine Margarita",
  },
];

// Dummy data pour les plats
const dishes = [
  {
    id: 1,
    dish_name: "Filet de saumon",
    description: "Filet de saumon grillé accompagné de légumes frais.",
    price: 24.99,
    availability: true,
    restaurant_id: 1,
    category: 1,
    image: "salmon_dish.jpg",
    alt: "Filet de saumon",
  },
  {
    id: 2,
    dish_name: "Pizza Margherita",
    description: "Pizza classique avec tomates, mozzarella et basilic.",
    price: 12.99,
    availability: true,
    restaurant_id: 2,
    category: 1,
    image: "margherita_pizza.jpg",
    alt: "Pizza Margherita",
  },
];

// Dummy data pour les commandes
const orders = [
  { id: 1, order_date: "2023-08-27", order_status: "en_attente", user_id: 1 },
  {
    id: 2,
    order_date: "2023-08-28",
    order_status: "en_preparation",
    user_id: 2,
  },
];

// Dummy data pour les articles de commande
const orderItems = [
  { id: 1, order_id: 1, dish_id: 1, quantity: 2 },
  { id: 2, order_id: 2, dish_id: 2, quantity: 1 },
];

// Export des données
module.exports = {
  users,
  categories,
  restaurants,
  dishes,
  orders,
  orderItems,
};
