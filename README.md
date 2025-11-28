<h1>Full Stack Food Ordering Website (MERN)</h1>

<p>
This project is a complete Food Ordering Web Application built using the MERN stack. 
It includes a User Frontend, Admin Panel, and Backend API. 
Users can browse food items, manage their cart, place orders, and make secure online payments. 
Admins can manage products, view all orders, and update order statuses.
</p>

<h2>📁 Project Structure</h2>

<pre>
mern-project/
│
├── Tomato/
│   ├── Admin/         # Admin Panel (React + Vite)
│   ├── Backend/       # Express API + MongoDB + Stripe
│   └── frontend/      # User Website (React + Vite)
│
├── .gitignore
├── package.json       # Root package to run all apps together
└── README.md
</pre>

<h2>🚀 Tech Stack (Exactly As Used)</h2>

<h3>Frontend (User Website - /Tomato/frontend)</h3>
<ul>
  <li>React 18</li>
  <li>React Router DOM 6</li>
  <li>Axios</li>
  <li>Vite</li>
</ul>

<h3>Admin Panel (/Tomato/Admin)</h3>
<ul>
  <li>React 18</li>
  <li>React Router DOM 7</li>
  <li>Axios</li>
  <li>React Toastify</li>
  <li>Vite</li>
</ul>

<h3>Backend (/Tomato/Backend)</h3>
<ul>
  <li>Node.js + Express.js</li>
  <li>MongoDB + Mongoose</li>
  <li>JWT Authentication</li>
  <li>Multer (Image Uploads)</li>
  <li>Bcrypt</li>
  <li>Stripe</li>
  <li>Validator</li>
  <li>dotenv</li>
  <li>Nodemon</li>
</ul>

<h3>Root</h3>
<ul>
  <li>Concurrently (runs all 3 apps together)</li>
</ul>

<h2>🧩 Features</h2>

<h3>User Features</h3>
<ul>
  <li>Browse food items</li>
  <li>Add to cart / remove from cart</li>
  <li>User authentication (Login & Register)</li>
  <li>Place orders</li>
  <li>Stripe-based payment verification</li>
  <li>View order history</li>
</ul>

<h3>Admin Features</h3>
<ul>
  <li>Add new food items</li>
  <li>Delete food items</li>
  <li>View all orders</li>
  <li>Update order status</li>
</ul>

<h3>Backend Features</h3>
<ul>
  <li>REST API with Express.js</li>
  <li>JWT authentication</li>
  <li>Mongoose models</li>
  <li>Multer-based image uploading</li>
  <li>Stripe payment integration</li>
  <li>Cleanly structured routes</li>
</ul>

<h2>🔧 Environment Variables</h2>

<p><strong>Backend (.env file - /Tomato/Backend/.env)</strong></p>

<pre>
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_secret
</pre>

<h2>▶️ Running the Project</h2>

<h3>1. Install Dependencies</h3>

<pre>
cd Tomato/Admin
npm install

cd ../Backend
npm install

cd ../frontend
npm install
</pre>

<h3>2. Start All Projects Together</h3>

<p>Run this from the root directory:</p>

<pre>
npm run dev
</pre>

<h3>Local URLs</h3>
<ul>
  <li><strong>Backend:</strong> http://localhost:4000</li>
  <li><strong>Frontend:</strong> http://localhost:5173</li>
  <li><strong>Admin Panel:</strong> http://localhost:5174</li>
</ul>

<h2>🙌 Author</h2>
<p><strong>Suraj Pathak</strong></p>
