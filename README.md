# Node.js Authentication System with MongoDB and Express

This project demonstrates authentication using login/register endpoints, ensuring session persistence with cookies, and accessing content using MongoDB. It follows the MVC (Model-View-Controller) approach with EJS templates and routers in Node.js.

## Features

- **Authentication:**
  - Implemented login and register endpoints using Node.js and Express and jwt.
  - Ensured session persistence using cookies.
  - Used bcrypt for password hashing to enhance security.
  
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
- bcrypt (for password hashing)
- EJS (Embedded JavaScript) templates
  
## Usage

- **Installing Dependencies:**
  - Install the dependencies:
    ```plaintext
    npm install
  - Run the project:
     ```plaintext
    npm start

- **Dashboard:**
  - Access `/` to get indexing page for login or register.
  - ![index](https://github.com/user-attachments/assets/9c806ffd-b80d-4bf6-a649-e73211b7f6a3)

  
- **Register:**
  - Access `/register` to create a new user account.
  - Provide `username`, `email`, and `password` in the request.
  - If the provided email already exists, an appropriate message is rendered using EJS.
  - Passwords are hashed using bcrypt before being stored in the database.
 ![Register](https://github.com/user-attachments/assets/cb90f6ac-0ee1-4cd1-b215-dc19cf9a76ef)


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
![Loginjpg](https://github.com/user-attachments/assets/23132fad-4f0d-413f-943b-2c4e254a11c5)
   
  ```plaintext
  POST /login
  Body:
  {
      "email": "your_email@example.com",
      "password": "your_password"
  }
    - **Home:**


- **Home:**
   - Access /home to view protected home content.
   - This endpoint requires a valid token (cookie) which is received upon successful login.
   - If accessed without a valid token, access will be denied:
![accessDenied](https://github.com/user-attachments/assets/578fccfd-b70b-4426-9a35-8fe313988f19)
  ```plaintext
  GET /home


## Example Workflow:

- **1)Register**
  - Create a new user account by sending a POST request to /register with the required details.
  - If the email already exists, an error message will be displayed.

- **2)Login**
  - Authenticate by sending a POST request to /login with your email and password.
  - Upon successful authentication, a token (cookie) will be set in the browser.
    
 - **3)Access Protected Routes:**
   - Home: After logging in, you can access the /home endpoint. The server will check for the presence of a valid token (cookie).
   - If you attempt to access /home without a valid token, you will be denied access.
  ![Dashboard](https://github.com/user-attachments/assets/3df76e40-f734-49c5-bc65-371e84560d3e)
 

