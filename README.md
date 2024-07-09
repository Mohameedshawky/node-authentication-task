# Node.js Authentication System with MongoDB and Express

This project demonstrates authentication using login/register endpoints, ensuring session persistence with cookies, and accessing content using MongoDB. It follows the MVC (Model-View-Controller) approach with EJS templates and routers in Node.js.

## Features

- **Authentication:**
  - Implemented login and register endpoints using Node.js and Express and jwt.
  - Ensured session persistence using cookies.
  
- **Database:**
  - Utilized MongoDB as the database management system using mongoose.

- **MVC Architecture:**
  - Organized project structure into Models, Views (using EJS templates), and Controllers.
  - Used routers to handle different endpoints and route requests accordingly.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT
- EJS (Embedded JavaScript) templates
  
## Usage


- **Dashboard:**
 - Access `/` to get indexing page for login or register.
  
- **Register:**
  - Access `/register` to create a new user account.
  - Provide `username`, `email`, and `password` in the request.
  - If the provided email already exists, an appropriate message is rendered using EJS.

  ```plaintext
  POST /register
  Body:
  {
      "username": "your_username",
      "email": "your_email@example.com",
      "password": "your_password"
  }
  GET /register
- **Login:**
 - Access `/login` to log onto our site.
 - Provide `email`, and `password` in the request.
 - After succesful logging it will be redirected for home page

  
```plaintext
POST /login
Body:
{
    "email": "your_email@example.com",
    "password": "your_password"
}


