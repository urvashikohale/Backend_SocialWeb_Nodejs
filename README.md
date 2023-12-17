# Nodejs Backend Challenge Documentation

Implemented using Node.js and Express, with MongoDB as the database using Mongoose.

# Table of contents
Project Overview
<br/>
Dependencies
<br/>
Prerequisites
<br/>
Installation
<br/>
Configuration
<br/>
API Endpoints


# 1. Project Overview <a name="project-overview"></a>
The project allows users to sign up, sign in, sign out, create posts, see posts, comment on posts, and manage user profiles.

# 2. Dependencies <a name="dependencies"></a>
Node.js: JavaScript runtime for server-side development.
<br/>
Express.js: Web application framework for Node.js.
<br/>
MongoDB: NoSQL database for data storage.
<br/>
Mongoose: MongoDB object modeling for Node.js.
<br/>
express-jwt: Middleware for validating JSON Web Tokens (JWT).
<br/>
formidable: A form data parsing library.
<br/>
crypto: Node.js cryptographic library.
<br/>
jsonwebtoken: Implementation of JSON Web Tokens for authentication.
<br/>
express-validator: Express.js middleware for input validation.
<br/>
dotenv: Module for loading environment variables.

# 3.Prerequisites <a name="Prerequisites"></a>
• Node.js, npm and mongodDb installed 
<br/>
• Other dependencies mentioned in package.json installed.

# 4.Installation <a name="installation"></a>
**Clone the repository**
git clone https://github.com/urvashikohale/Nodejs_Backend_Challenge.git

**Change directory**
cd Nodejs_Backend_Challenge

**Install dependencies**
npm install

# 5.Configuration <a name="configuration"></a>
Create a .env file in the root directory.
<br/>
Add the following configurations to the .env file: 
<br/>
PORT=8000 
<br/>
DATABASE=mongodb://localhost:27017/your-database-name 
<br/>
SECRET=your-secret-key


# 6. Api Endpoint <a name="api-routes"></a>

**User Registration/ create user**

Signup:
Endpoint: POST /api/signup
Validates user input using express-validator.
Creates a new user in the database.

**User Authentication**

Signin:
Endpoint: POST /api/signin
Validates user input using express-validator.
Authenticates the user and generates a JWT token.

Signout:
Endpoint: GET /api/signout
Clears the user's JWT token from the cookie.

**User Profile**

Get User Profile:
Endpoint: GET /api/user/:userId
Retrieves user profile information.

Update User profile:
Endpoint: PUT /api/user/:userId
Updates user profile information.

**Post & Comment**

Create a post:
Endpoint: POST /api/posts/new/:userId
Creates a new post.
Handles file uploads using formidable.

Get Post:
Endpoint: GET /api/posts/by/:userId
Retrieves posts by a specific user.

Get All post:
Endpoint: GET /api/posts
Retrieves all posts.

Delete a post
Endpoint: DELETE /api/post/:userId/:postId
Deletes a specific post.

Update a post:
Endpoint: PUT /api/post/:userId/:postId
update a post

Comment on post:
Endpoint: PUT /api/post/:userId/:postId
Adds a comment to a specific post.







