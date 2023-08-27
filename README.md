# 18 NoSQL: Social Network API

  ## Description

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API is build using Express.js for routing, a MongoDB database, and the Mongoose ODM. Seed database is pulled from a random mock data via Faker-js. 

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Visuals](#visuals)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation
  On the command line terminal:
  1. Navigate to the repository folder 
  2. Download or clone the repository
  3. Install [Node.js](https://nodejs.org/) if it is not installed on your machine
  4. Run `npm install` to install the necessary dependencies
  5. Seed database - `npm run seed`

  ## Usage
Navigate to the repository folder and on the command line terminal: 
  1. Run `npm start`
  2. Access API routes with Insomnia

  ## Visuals
  Here is a video and link demonstrating get, post, delete for User and Thought routes. 
  https://drive.google.com/file/d/15b5g4Y-4jMM7oGvqH9FiCjkCHGQK_UFB/view 

  ![Watch video](./assets/nosql.gif)

  ## License
  This project is covered under the MIT license, Node.JS, MongooseDB, Mongoose, Express, and Insomnia. 

  ## Tests
  Routes to test on Insomnia:

  ### User Routes

  /api/users
  1. GET - http://localhost:3001/api/users
  2. POST - http://localhost:3001/api/users 
    JSON: 
    {
      "username": "cooper",
      "email": "cooper@gmail.com"
    }

  /api/users/:userid
  1. GET - http://localhost:3001/api/users/:id
  2. PUT - http://localhost:3001/api/users/:id
    JSON: 
      {
        "username": "cooperDog",
        "email": "cooper@gmail.com"
      }
   2. DEL - http://localhost:3001/api/users/:id

   api/users/:userId/friends/:friendId
   1. POST - http://localhost:3001/api/users/:userID/friends/:friendId
   2. DEL - http://localhost:3001/api/users/:userID/friends/:friendId

  ### Thought Routes

  api/thoughts
  1. GET - http://localhost:3001/api/thoughts
  2. POST - http://localhost:3001/api/thoughts
    JSON:
    {
      "thoughtText": "Hello",
      "username": "cooper",
      "userId": "64eaa42c823118fae7be428e"
    }
  3. DEL - http://localhost:3001/api/thoughts/:thoughtId

  api/thoughts/thoughtId
  1. GET - http://localhost:3001/api/thoughts/:thoughtId
  2. PUT - http://localhost:3001/api/thoughts/:thoughtId
    JSON:
    {
      "thoughtText": "Hello again and again"
    }
  3. DELETE - http://localhost:3001/api/thoughts/:thoughtId

  api/thoughts/thoughtId/reactions
  1. GET - http://localhost:3001/api/thoughts/:thoughtId/reactions
  2. DEL - http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId


  ## Contributing
  If you would like to contribute to this project, please fork the project and submit a pull request.

  ## Questions
  For any additional questions, you can contact the author: mayperalta@gmail.com. 

