# Artist Profile Template App - Backend

[Deployed version](#)(dito-artist-server.vercel.app)

## Table of Contents
- About
- Technologies Used
- Setup/Installation
- API Endpoints
- Status
- Next Steps
- Credits

## About
This is the backend of the Artist Profile Template App, built to manage user authentication, product management, and release management for artists. It handles CRUD operations for artist releases and products, user authentication with JWT, and securely stores user data using MongoDB.

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing user, product, and release data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For secure user authentication.
- **bcrypt**: For hashing passwords securely.
- **dotenv**: For managing environment variables.
- **Cors**: For enabling cross-origin requests between the frontend and backend.
- **Morgan**: HTTP request logger middleware for Node.js.

## Setup / Installation
1. **Clone the repository** to your local machine.
2. **Install dependencies** using `npm install`.
3. **Set up your environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     MONGODB_URI=<your_mongodb_uri>
     TOKEN_SECRET=<your_jwt_secret>
     ORIGIN=<frontend_url>
     ```
4. **Run the server** using `npm run dev`.
5. Ensure your MongoDB instance is running and accessible.

## API Endpoints

### Authentication
- **POST /auth/signup**: Create a new user.
- **POST /auth/login**: Authenticate a user and return a JWT.
- **GET /auth/verify**: Verify the validity of a stored JWT.

### Product Management
- **POST /api/products**: Create a new product (requires authentication).
- **GET /api/products**: Retrieve all products.
- **GET /api/products/:productId**: Retrieve a specific product by ID.
- **PUT /api/products/:productId**: Update a specific product by ID (requires authentication).
- **DELETE /api/products/:productId**: Delete a specific product by ID (requires authentication).

### Release Management
- **POST /api/releases**: Create a new release (requires authentication).
- **GET /api/releases**: Retrieve all releases.
- **GET /api/homepage/release**: Retrieve the latest release for display on the homepage.
- **GET /api/releases/:releaseId**: Retrieve a specific release by ID.
- **PUT /api/releases/:releaseId**: Update a specific release by ID (requires authentication).
- **DELETE /api/releases/:releaseId**: Delete a specific release by ID (requires authentication).

## Status
- **In Progress**: The backend is functional but still under development. Additional features and optimizations are planned.

## Next Steps
- **Enhanced Security**: Implement rate limiting and more advanced security features.
- **Error Handling**: Improve error handling across the API to ensure robustness.
- **Additional CRUD Features**: Further expand the API to allow more customization and functionality for artists.

## Credits
- Developed by Aquiles Hinestrosa , Kim Delgado and Esteban Escalante.