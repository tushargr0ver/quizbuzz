# QuizBuzz

QuizBuzz is a web application that allows users to organize and join online quizzes. The quizzes can be accessed through a private link, are available only for a limited time, and can only be attempted by users who have the link. The project uses Node.js and Express for the server-side, with React for the client-side.
## Features

    Organize Quizzes: Create quizzes that can be accessed via a private link.
    Join Quizzes: Users can join quizzes using the provided private link.
    Time-Limited Access: Quizzes are available only for a specific date and time.
    Private Access: Only users with the private link can attempt the quiz.
    JWT Authentication: The backend uses JSON Web Tokens (JWT) for user authentication.

## Technologies Used

   ### Backend:
        Node.js
        Express.js
        MongoDB (Mongoose)
        JSON Web Tokens (JWT)

  ###  Frontend:
        React.js
        React Router DOM

## Project Status

The project is currently in development. The frontend is not yet complete, and the application has not been deployed.
## Installation

To set up the project locally:

   1. Clone the repository:

git clone https://github.com/tushargr0ver/quizbuzz.git
2. cd quizbuzz

3. Install dependencies

For the backend:

cd server
npm install

For the frontend:

cd client
npm install

Set up environment variables:

Create a .env file in the server directory with the following content:

MONGO_URI=your_mongo_database_uri_here
JWT_SECRET=your_jwt_secret_here

4. Run the application:

In the server directory:

npm run dev

In the client directory (once the frontend is complete):

    npm run dev

## Usage

    Organize a Quiz: Create a new quiz, set the date, time, and generate a private link.
    Join a Quiz: Access the quiz using the provided private link within the set time frame.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
Author

    Tushar Grover
        GitHub: tushargr0ver