# 🔗 Short URL Generator

A simple Node.js application to shorten long URLs using a custom short ID. Built with Express.js and MongoDB.

## 🚀 Features

- Generate short URLs  
- Redirect to original URLs using the short ID  
- MongoDB integration for persistence

## 📁 Project Structure

```
SHORT-URL/
├── config/
│   └── db.js
├── controllers/
│   └── urlController.js
├── models/
│   └── url.js
├── routes/
│   └── urlRoutes.js
├── server.js
├── package.json
└── .gitignore
```

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (with Mongoose)  
- shortid for unique URL generation

## 📬 API Endpoints

### POST `/shorten`

- **Description:** Creates a new short URL  
- **Request Body:**

```json
{
  "originalUrl": "https://example.com"
}
```

- **Response:**

```json
{
  "shortId": "abc123"
}
```

---

### GET `/:shortId`

- **Description:** Redirects to the original URL using the short ID.
