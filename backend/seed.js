const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: "ZYN Classic Brown Leather",
    description: "Premium handcrafted leather shoes perfect for formal occasions and business meetings.",
    price: 189,
    category: "Shoes",
    image: "/src/assets/zynshoes/shoe1.jpg",
    stock: 10,
  },
  {
    name: "ZYN Sport Elite Runner",
    description: "High-performance running shoes with advanced cushioning technology for athletes.",
    price: 225,
    category: "Shoes",
    image: "/src/assets/zynshoes/shoee2.jpg",
    stock: 15,
  },
  {
    name: "ZYN Slim Fit Jeans",
    description: "Premium slim fit jeans with perfect comfort and modern styling.",
    price: 89,
    category: "Pants",
    image: "/src/assets/pant/pant0.jpg",
    stock: 20,
  },
  // Add more as needed
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/devich-clothing');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();