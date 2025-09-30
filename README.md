# Devich Clothing - E-commerce Platform

A modern, responsive e-commerce platform built with React, Vite, and Node.js for selling shoes and clothing.

## Features

- 🛍️ **Product Catalog**: Browse shoes and clothing with detailed product pages
- 🔐 **User Authentication**: Sign up, login with JWT tokens
- 🛒 **Shopping Cart**: Add/remove items, persistent cart state
- ❤️ **Wishlist**: Save favorite products
- 📱 **Mobile Responsive**: Optimized for all devices including Infinix, Vivo, and other mobile phones
- 🔍 **Search & Filter**: Find products by category, price, and search terms
- 📦 **Order Management**: View order history and track purchases
- 💳 **Payment Integration**: Stripe payment processing (frontend ready)
- 🎨 **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

### Frontend
- React 19 with Vite
- React Router for navigation
- Context API for state management
- Lucide React for icons
- Stripe Elements for payments

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Stripe for payment processing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devich-clothing
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   # Copy environment file
   cp .env.example .env

   # Update .env with your values
   VITE_API_URL=http://localhost:5000
   ```

5. **Backend Environment**
   ```bash
   cd backend
   # Create .env file with:
   MONGODB_URI=mongodb://localhost:27017/devich-clothing
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   PORT=5000
   ```

6. **Start the development servers**
   ```bash
   # Terminal 1: Start backend
   cd backend && npm run dev

   # Terminal 2: Start frontend
   npm run dev
   ```

7. **Seed the database (optional)**
   ```bash
   cd backend
   node seed.js
   ```

## Deployment

### Frontend (Netlify)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set environment variable: `VITE_API_URL=https://your-backend-url.com`

### Backend (Heroku, Railway, etc.)
1. Deploy the `backend` folder to your preferred hosting service
2. Set environment variables in your hosting platform
3. Update the frontend `VITE_API_URL` to point to your deployed backend

## Project Structure

```
devich-clothing/
├── public/
│   ├── _redirects          # Netlify SPA redirects
│   └── ...
├── src/
│   ├── assets/             # Images and static files
│   ├── component/
│   │   ├── context/        # React contexts (Auth, Cart, etc.)
│   │   ├── homepage/       # Landing page
│   │   ├── navbar/         # Navigation component
│   │   ├── products/       # Product listing and cards
│   │   ├── cart/           # Shopping cart
│   │   ├── wishlist/       # Wishlist functionality
│   │   ├── signin/         # Authentication
│   │   └── ...
│   └── ...
├── backend/
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth middleware
│   └── ...
├── netlify.toml            # Netlify configuration
├── .env.example            # Environment variables template
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product

### Orders
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order

### Payments
- `POST /api/payment/create-payment-intent` - Create Stripe payment intent
- `POST /api/payment/confirm-payment` - Confirm payment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
