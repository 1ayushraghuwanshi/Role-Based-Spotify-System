Building a music streaming backend requires careful orchestration of file handling, authentication, and relational data modeling. Since you are using **ImageKit** for storage and a **Role-Based Access Control (RBAC)** system, the architecture needs to be robust enough to handle binary data streams and middleware-protected endpoints.

Below is a structured GitHub-ready `README.md` and the essential implementation details to showcase high-level backend expertise.

---

## 🎵 MelodyNode: Role-Based Music Streaming API

A high-performance backend built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates advanced patterns in RBAC, cloud file management with ImageKit, and relational modeling for music and albums.

### 🚀 Features
* **RBAC Authentication:** Secure registration and login using JWT.
* **Artist-Only Actions:** Protected routes for music and album creation.
* **Cloud Storage:** Seamless integration with ImageKit for media assets.
* **Relational Logic:** Dynamic linking between tracks and albums.

---

### 📂 Project Structure
```text
├── config/             # Database & ImageKit configuration
├── controllers/        # Request handlers (Auth, Music, Album)
├── middleware/         # Auth & Role validation (isArtist)
├── models/             # Mongoose Schemas (User, Music, Album)
├── routes/             # API Endpoints
└── server.js           # Entry point
```

---

### 🛠️ Core Implementation

#### 1. The Role-Based Middleware
To ensure only artists can upload, we use a middleware factory that checks the `role` field in the user's JWT payload.

#### 2. The Music Upload Route (with ImageKit)
This endpoint handles the multipart form data and pipes it to ImageKit, then saves the returned URL to your database.


### 📡 API Documentation

| Method   |   Endpoint           | Access      | Description |
| :---     | :---                 | :---        | :--- |
| **POST** | `/api/auth/register` | Public      | Create a new user/artist account |
| **POST** | `/api/auth/login`    | Public      | Authenticate and receive JWT |
| **GET**  | `/`                  | Public      | Fetch all available tracks |
| **GET**  | `/albums`            | Public      | Fetch all albums |
| **POST** | `/api/music/upload`  | **Artist**  | Upload music file to ImageKit |
| **POST** | `/api/music/album`   | **Artist**  | Group existing tracks into an album |

---

### 🛠️ Getting Started

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/1ayushraghuwanshi/Role-Based-Spotify-System.git
    cd Role-Based-Auth
    ```

2.  **Environment Setup**
    Create a `.env` file with your ImageKit keys and MongoDB URI:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret
    IMAGEKIT_PUBLIC_KEY=your_key
    IMAGEKIT_PRIVATE_KEY=your_private_key
    IMAGEKIT_URL_ENDPOINT=your_url
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Run the Server**
    ```bash
    node server.js
    ```

### 🧠 Backend Concepts Demonstrated
* **JWT Implementation:** Stateless authentication.
* **RBAC Architecture:** Scaling permissions for different user types.
* **Data Normalization:** Referencing `Music` IDs within `Album` documents to optimize query speeds.
* **Error Handling:** Global middleware for catching asynchronous errors.

Would you like me to dive deeper into the specific logic for the ImageKit upload helper or the MongoDB schema relationships?
