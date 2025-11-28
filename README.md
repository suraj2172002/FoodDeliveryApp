<h1>Full Stack Food Ordering Website (MERN)</h1>

<p>
This project is a complete Food Ordering Web Application built using the MERN stack. 
It includes a User Frontend, Admin Panel, and Backend API. 
Users can browse food items, manage their cart, place orders, and make secure online payments. 
Admins can manage products, view all orders, and update order statuses.
</p>

<h3>📁 Project Structure</h3>

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

<h3>🚀 Tech Stack</h3>

<h2>Frontend (/Tomato/frontend)</h2>
<ul>
  <li>React 18</li>
  <li>React Router DOM 6</li>
  <li>Axios</li>
  <li>Vite</li>
</ul>

<h2>Admin Panel (/Tomato/Admin)</h2>
<ul>
  <li>React 18</li>
  <li>React Router DOM 7</li>
  <li>Axios</li>
  <li>React Toastify</li>
  <li>Vite</li>
</ul>

<h2>Backend (/Tomato/Backend)</h2>
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

<h2>Root</h2>
<ul>
  <li>Concurrently (runs all 3 apps together)</li>
</ul>

<h3>🧩 Features</h3>

<h2>User Features</h2>
<ul>
  <li>Browse food items</li>
  <li>Add to cart / remove from cart</li>
  <li>User authentication (Login & Register)</li>
  <li>Place orders</li>
  <li>Stripe-based payment verification</li>
  <li>View order history</li>
</ul>

<h2>Admin Features</h2>
<ul>
  <li>Add new food items</li>
  <li>Delete food items</li>
  <li>View all orders</li>
  <li>Update order status</li>
</ul>

<h2>Backend Features</h2>
<ul>
  <li>REST API with Express.js</li>
  <li>JWT authentication</li>
  <li>Mongoose models</li>
  <li>Multer-based image uploading</li>
  <li>Stripe payment integration</li>
  <li>Cleanly structured routes</li>
</ul>

<h3>🔧 Environment Variables</h3>

<p><strong>Backend (.env file - /Tomato/Backend/.env)</strong></p>

<pre>
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_secret
</pre>

<h3>▶️ Running the Project</h3>

<h2>1. Install Dependencies</h2>

<pre>
cd Tomato/Admin
npm install

cd ../Backend
npm install

cd ../frontend
npm install
</pre>

<h2>2. Start All Projects Together</h2>

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
