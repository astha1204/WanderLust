# 🌍 WanderLust - Travel and Stay Booking Platform

**WanderLust** is a full-stack travel platform where users can discover and review travel destinations, book stays, and manage listings. It's built using the **Node.js + Express** backend with **MongoDB** for data persistence and **EJS** for server-side rendering.


---

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: Passport.js (Local Strategy)
- **Session Management**: express-session, connect-mongo
- **Flash Messaging**: connect-flash
- **File Uploads**: Multer, Cloudinary (optional for production)

---

## ⚙️ Features

- 🏕️ View a collection of travel destinations
- ➕ Add, edit, and delete listings (authenticated users only)
- 💬 Comment and review system for each stay
- 🔐 User authentication and login system
- 📷 Support for multiple image uploads (locally or via Cloudinary)
- 🔄 Real-time feedback with flash messages

---

## 🚀 Getting Started

```bash
git clone https://github.com/astha1204/wanderlust.git
cd wanderlust
npm install

Create a .env file in the root directory and add the following environment variables:
DB_URL=mongodb://localhost:27017/wanderlust
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
⚠️ You can skip the Cloudinary fields if you're storing images locally.

Now start the app with:
npm start
Then open your browser and go to:
📍 http://localhost:3000
