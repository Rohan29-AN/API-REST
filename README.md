## Express API REST Example
This project is used to demonstrate how to build a simple REST API using Express Js, storing the data in a JSON file instead of a database.

**Features:**

 - User authentification (registration/login)
 - JSON-based data storage
 - Restful endpoint for user management
 - Middleware for input validation (with JOI)
 
 **Project structure:**
 
|Folder | Explaination |
|--|--|
| controllers | Contains route handlers  |
| middlewares | Middleware function for validation , logging,etc |
| routes | API route definitions |
| services | Reusable business logic|
| data | JSON file to store user data|
| app.js | Main application file|
| Readme.md | Documentation|

 **Usage:**

    npm i
    npm start

 **Run in docker:**
 Install docker compose and run it :
 

    docker-compose up -d

**API Documentation:**
After starting the server, open http://localhost:3000/api-docs in your browser to view the Swagger UI with API documentation.

 **How to contribute:**
1.  Fork the repository.
2.  Create a feature branch: `git checkout -b feature-name`.
3.  Commit your changes: `git commit -m 'Add feature-name'`.
4.  Push to the branch: `git push origin feature-name`.
5.  Open a pull request.