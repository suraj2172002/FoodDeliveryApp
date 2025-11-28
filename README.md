<h1>Full Stack Food Ordering Website (MERN)</h1>

This is a Full Stack Food Ordering Web Application built using the MERN stack with a separate Frontend, Admin Panel, and Backend API.
The project allows users to browse food items, manage cart items, place orders, and make online payments.
Admins can manage food items, view all orders, and update order statuses.

📁 Project Structure


mern-project/
│
├── Tomato/
│   ├── Admin/        # Admin Panel (React + Vite)
│   ├── Backend/      # Express API + MongoDB + Stripe
│   └── frontend/     # User Website (React + Vite)
│
├── .gitignore
├── package.json      # Root package for running all projects together
└── README.md

🚀 Tech Stack (Exactly As Used)

Frontend (User Website - /Tomato/frontend)

React 18
React Router DOM 6
Axios
Vite

Admin Panel (/Tomato/Admin)

React 18
React Router DOM 7
Axios
React Toastify
Vite

Backend (/Tomato/Backend)

Node.js + Express.js
MongoDB + Mongoose
JWT Authentication
Multer (for image upload)
Bcrypt
Stripe
Validator
dotenv
Nodemon

Root--------
Concurrently (to run all 3 apps together)


🧩 Features-------------

User Features---

Browse food items
Add to cart
Remove from cart
Login & Register
Place orders
Stripe-based payment verification
View user orders

Admin Features---

Add new food items
Remove food items
View all orders
Update order status

Backend Features---

REST API (Express.js)
JWT authentication
MongoDB + Mongoose models
Image upload using Multer
Stripe payment intent + verification
Clean route structure


🔧 Environment Variables--------

Backend (/Tomato/Backend/.env)

MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_secret


▶️ Running the Project---------
1. Install dependencies

Go to each folder:

cd Tomato/Admin
npm install

cd ../Backend
npm install

cd ../frontend
npm install

2. Start all projects together

From the root directory:

npm run dev


This runs all three:

Backend: http://localhost:4000
Frontend: usually http://localhost:5173
Admin: usually http://localhost:5174

🙌 Author

Suraj Pathak