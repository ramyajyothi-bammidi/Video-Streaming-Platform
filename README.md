# 🎬 PhotoTube – Video Streaming Platform

A modern and responsive **Video Streaming Platform** called **PhotoTube**, developed using the **MERN Stack**. The platform allows users to register and log in, discover videos, search for content, browse videos by category, upload videos, watch video content, interact with videos, and manage uploaded content through a personalized dashboard.

The application features a modern **dark-themed interface with red accent colors**, providing a clean and engaging video-streaming experience.

---

# 📋 Project Information

| Field             | Details                              |
| ----------------- | ------------------------------------ |
| **Intern ID**     | CITS4882                             |
| **Full Name**     | Bammidi Ramya Jyothi                 |
| **Project Name**  | PhotoTube – Video Streaming Platform |
| **Project Scope** | Full Stack Web Development           |
| **Technology**    | MERN Stack                           |
| **Duration**      | 8 Weeks                              |

---

# 📖 Project Description

**PhotoTube** is a full-stack video streaming web application designed to provide users with a simple and modern platform for discovering, watching, uploading, and interacting with video content.

The application is developed using the **MERN Stack**, which includes:

* MongoDB
* Express.js
* React.js
* Node.js

The platform provides a **Discover** page where users can browse the latest videos and filter content using categories such as **Education, Technology, Gaming, Music, Entertainment, and Sports**.

Users can create an account, securely log in, search for videos, upload their own content, watch videos, like videos, add comments, and access a personal dashboard.

The project demonstrates practical implementation of **full-stack development, REST APIs, authentication, database management, file uploads, protected routes, responsive UI design, and React component architecture**.

---

# 🚀 Features

## 👤 User Authentication

* User Registration
* User Login
* Secure Password Hashing
* JWT Authentication
* Protected Routes
* Authentication State Management
* User Profile Avatar

---

## 🏠 Discover Page

The Discover page acts as the main homepage of PhotoTube.

Users can:

* Explore available videos
* View latest uploaded videos
* Browse video categories
* Search for videos
* Upload videos
* Access their dashboard

---

## 🎥 Video Features

* Browse Videos
* Watch Videos
* Video Player
* Upload Videos
* Upload Video Thumbnails
* Display Video Titles
* Display Video Descriptions
* Video Categories
* Track Video Views
* Like Videos
* Display Video Information

---

## 🔎 Search

PhotoTube includes a dedicated video search functionality.

Users can:

* Search videos
* Find relevant content
* View search results
* Navigate to video content

The search bar is available directly in the main navigation area.

---

## 📂 Video Categories

Users can discover videos using different categories:

* 🔥 All
* 📚 Education
* 💻 Technology
* 🎮 Gaming
* 🎵 Music
* 🎬 Entertainment
* ⚽ Sports

The selected category is highlighted to make navigation easier.

---

## ⬆️ Upload Video

Authenticated users can upload their own videos.

The upload functionality supports:

* Video file upload
* Thumbnail upload
* Video title
* Video description
* Video category
* Creator information

Uploaded content can then appear in the PhotoTube video feed.

---

## 📊 Dashboard

The Dashboard allows authenticated users to manage their uploaded video content.

Users can access:

* Uploaded videos
* Video information
* Personal content
* Video management functionality

---

## ❤️ Video Interaction

Users can interact with video content through:

* ❤️ Like functionality
* 💬 Comments
* 👁️ View count

These features make the platform more interactive and engaging.

---

## 🎨 Modern User Interface

PhotoTube uses a modern dark-themed interface with:

* 🌑 Dark background
* 🔴 Red accent colors
* ⚪ White typography
* 🎴 Modern content cards
* 🔍 Search interface
* 📱 Responsive layout
* 🧭 Sidebar navigation
* 🎬 Video-focused design

---

# 🖥️ User Interface

The PhotoTube interface is designed around a modern video-streaming experience.

The application uses a dark background with red highlights for important actions such as:

* Register
* Upload
* Search
* Active category
* Navigation actions

---

# 🔐 Register Page

The Register page provides a simple interface for new users to create their PhotoTube account.

Users provide:

* Name
* Email
* Password

The registration form uses a modern dark card layout with red action buttons.

![PhotoTube Register Page](screenshots/register.png)

---

# 🏠 Discover / Home Page

The Discover page is the main page of PhotoTube.

It contains:

* PhotoTube logo
* Search bar
* Upload button
* User avatar
* Sidebar navigation
* Video categories
* Latest Videos section

![PhotoTube Discover Page](screenshots/home.png)

---

# 🧭 Sidebar Navigation

The sidebar provides quick access to the major sections of the platform.

### Main Navigation

* 🏠 Home
* ⬆️ Upload Video
* 📁 Dashboard
* 🔍 Search

### Categories

* 🎮 Gaming
* 💻 Technology
* 🎵 Music
* 📚 Education

This allows users to quickly navigate through the platform.

---

# 🔎 Search Interface

The top navigation contains a dedicated search bar where users can search for video content.

```text
┌─────────────────────────────────────────────┐
│ Search videos...                         🔍 │
└─────────────────────────────────────────────┘
```

The search functionality allows users to quickly find videos available on the platform.

---

# 📂 Video Categories

PhotoTube provides category-based content discovery.

```text
🔥 All
📚 Education
💻 Technology
🎮 Gaming
🎵 Music
🎬 Entertainment
⚽ Sports
```

The **All** category displays all available videos, while other categories allow users to explore specific types of content.

---

# 🎥 Latest Videos

The **Latest Videos** section displays recently uploaded content from the PhotoTube community.

When videos are available, users can browse the latest uploaded content through video cards.

When there are no videos available, PhotoTube displays a friendly empty state:

```text
📺
No videos found

Try another category or upload your first video.
```

This provides users with clear feedback instead of displaying an empty screen.

![Latest Videos](screenshots/latest-videos.png)

---

# 📤 Upload Video

The Upload Video section allows authenticated users to publish their own content on PhotoTube.

The upload workflow can be represented as:

```text
User
 │
 ▼
Upload Video Page
 │
 ├── Video File
 │
 ├── Thumbnail
 │
 ├── Title
 │
 ├── Description
 │
 └── Category
 │
 ▼
Express API
 │
 ▼
Multer File Upload
 │
 ├── Video Storage
 │
 └── Thumbnail Storage
 │
 ▼
MongoDB
 │
 ▼
Video Available on PhotoTube
```

---

# 🔄 Application Workflow

```text
                         PhotoTube
                            │
                            ▼
                       User Visits
                            │
             ┌──────────────┴──────────────┐
             │                             │
         Register                         Login
             │                             │
             └──────────────┬──────────────┘
                            │
                            ▼
                       Discover Page
                            │
             ┌──────────────┼──────────────┐
             │              │              │
           Search       Categories       Upload
             │              │              │
             ▼              ▼              ▼
          Results      Filter Videos    Upload Video
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                        Watch Video
                            │
                  ┌─────────┼─────────┐
                  │         │         │
                Like     Comment     Views
                  │         │         │
                  └─────────┼─────────┘
                            │
                            ▼
                        Dashboard
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS
* Axios
* React Router DOM
* React Player
* React Icons
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* JavaScript
* REST API
* JWT
* bcryptjs
* Multer
* Cookie Parser
* CORS
* Morgan

---

## Database

* MongoDB
* Mongoose

---

## Version Control

* Git
* GitHub

---

## Development Tools

* Visual Studio Code
* Vite
* Nodemon
* npm
* MongoDB

---

# 📂 Project Structure

```text
Video-Streaming-Platform/
│
├── client/
│   │
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
│   │   ├── components/
│   │   │   ├── CommentSection.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── VideoCard.jsx
│   │   │   └── VideoPlayer.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Upload.jsx
│   │   │   └── Video.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── videoService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── formatDate.js
│   │   │   └── formatViews.js
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── routes.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── commentController.js
│   │   └── videoController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── Comment.js
│   │   ├── User.js
│   │   └── Video.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── commentRoutes.js
│   │   └── videoRoutes.js
│   │
│   ├── uploads/
│   │   ├── thumbnails/
│   │   └── videos/
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   ├── register.png
│   ├── home.png
│   ├── latest-videos.png
│   ├── upload.png
│   ├── dashboard.png
│   └── video.png
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/ramyajyothi-bammidi/Video-Streaming-Platform.git
```

---

## Navigate to Project Folder

```bash
cd Video-Streaming-Platform
```

---

# 📦 Install Backend Dependencies

Navigate to the server folder:

```bash
cd server
```

Install the required packages:

```bash
npm install
```

---

# 📦 Install Frontend Dependencies

Open another terminal and navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If the frontend requires an API URL, create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

> ⚠️ **Important:** Do not upload `.env` files to GitHub. They may contain sensitive information such as database credentials and JWT secrets.

---

# ▶️ Run the Project

The frontend and backend need to run separately.

## Start Backend

Open a terminal:

```bash
cd server
npm run dev
```

The backend server will run on:

```text
http://localhost:5000
```

---

## Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

Open the application in your browser:

```text
http://localhost:5173
```

---

# 🔐 Authentication Flow

```text
                     User
                       │
              ┌────────┴────────┐
              │                 │
           Register            Login
              │                 │
              ▼                 ▼
         Express API       Express API
              │                 │
              ▼                 ▼
       Hash Password      Verify Password
              │                 │
              ▼                 ▼
           MongoDB          Generate JWT
                                │
                                ▼
                        Authenticated User
                                │
                                ▼
                         Protected Pages
```

Protected pages can include:

* Upload Video
* Dashboard
* User-specific functionality

---

# 🗄️ Database Models

## 👤 User Model

Stores user account information.

```text
User
 ├── name
 ├── email
 └── password
```

Passwords are hashed before being stored in the database.

---

## 🎥 Video Model

Stores information about uploaded videos.

```text
Video
 ├── title
 ├── description
 ├── videoUrl
 ├── thumbnailUrl
 ├── category
 ├── views
 ├── likes
 ├── uploadedBy
 ├── createdAt
 └── updatedAt
```

---

## 💬 Comment Model

Stores comments associated with videos and users.

```text
Comment
 ├── user
 ├── video
 ├── content
 └── timestamps
```

---

# 🔌 API Structure

## Authentication

```text
/api/auth
```

Used for:

* Registration
* Login
* Authentication

---

## Videos

```text
/api/videos
```

Used for:

* Retrieve videos
* Retrieve individual videos
* Upload videos
* Update video information
* Delete videos
* Like videos
* Track views

---

## Comments

```text
/api/comments
```

Used for:

* Add comments
* Retrieve comments
* Manage comments

---

# 🛡️ Security

The application implements several security practices:

* JWT authentication
* Password hashing with bcrypt
* Protected routes
* Authentication middleware
* Environment variables
* CORS configuration
* Backend validation
* Error-handling middleware
* Secure authentication cookies where applicable

---

# 📱 Responsive Design

PhotoTube is designed to provide a consistent experience across different screen sizes.

The responsive interface includes:

* Navigation bar
* Sidebar
* Search bar
* Category navigation
* Video cards
* Video player
* Authentication pages
* Upload interface
* Dashboard

---

# 🎯 Learning Outcomes

During the development of this project, the following concepts were learned and implemented:

* MERN Stack Development
* React.js Fundamentals
* Component-Based Architecture
* React Router Navigation
* REST API Development
* MongoDB Database Integration
* Mongoose
* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* File Upload using Multer
* Video Upload and Playback
* API Integration using Axios
* State Management
* Responsive Web Design
* Express.js Middleware
* Backend MVC Architecture
* Frontend Service Architecture
* Git & GitHub Version Control

---

# 🔮 Future Enhancements

The PhotoTube platform can be further enhanced with:

* 👤 User Profiles
* ⭐ Video Ratings
* 📺 Video Playlists
* ❤️ Watch Later
* 📜 Watch History
* 🔔 Real-Time Notifications
* 👥 Subscribe/Follow Creators
* 🔴 Live Streaming
* 💬 Real-Time Comments
* 🔎 Advanced Search and Filtering
* 🌙 Dark/Light Mode
* ☁️ Cloud Video Storage
* 🖼️ Cloud Thumbnail Storage
* 📊 Creator Analytics
* 🛡️ Admin Dashboard
* 🎞️ Video Compression
* 📱 Progressive Web App Support
* 🤖 AI-Based Video Recommendations

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

Fork the PhotoTube repository on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/Video-Streaming-Platform.git
```

### 3. Create a feature branch

```bash
git checkout -b feature/new-feature
```

### 4. Make your changes

Develop and test your feature.

### 5. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### 6. Push your branch

```bash
git push origin feature/new-feature
```

### 7. Open a Pull Request

Create a Pull Request on GitHub.

---

# 📜 License

This project was developed for **educational and internship purposes** under **CodTech IT Solutions**.

---

# 👩‍💻 Author

**Bammidi Ramya Jyothi**

**Intern ID:** CITS4882

**Project:** PhotoTube – Video Streaming Platform

GitHub: [https://github.com/ramyajyothi-bammidi](https://github.com/ramyajyothi-bammidi)

---

# ⭐ Project Highlights

PhotoTube demonstrates practical implementation of a modern full-stack video platform using the MERN stack.

### Key Highlights

* 🎬 Modern Video Streaming Platform
* 🌑 Dark-Themed UI
* 🔴 Red Accent Design
* 👤 User Authentication
* 🎥 Video Upload
* 📺 Video Playback
* 🔎 Video Search
* 📂 Category-Based Browsing
* ❤️ Video Interaction
* 💬 Comment System
* 📊 User Dashboard
* 🗄️ MongoDB Database
* 🔐 JWT Authentication
* 📁 File Upload using Multer
* ⚡ React + Vite Frontend
* 🚀 Node.js + Express Backend

---

## ⭐ If you found this project useful, don't forget to give it a star on GitHub!
