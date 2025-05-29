# Quotes Application

A simple full-stack application for managing quotes with author attribution.

## Features

- View all quotes
- Add new quotes
- Delete existing quotes
- Real-time UI updates

## Key Learning Topics

1. **Express.js Backend Development**
   - Building a RESTful API server with Express
   - Handling different HTTP methods (GET, PUT, DELETE)
   - Route handling and middleware integration

2. **Prisma ORM with MongoDB**
   - Defining schemas and models with Prisma
   - Database connection configuration using environment variables
   - Implementing CRUD operations with Prisma Client

3. **Frontend-Backend Integration**
   - Making asynchronous API requests with fetch
   - Handling JSON responses and errors
   - State synchronization between client and server

4. **Vanilla JavaScript State Management**
   - Implementing a custom state management solution
   - Creating reactive rendering based on state changes
   - Managing component lifecycles without frameworks

5. **DOM Manipulation**
   - Dynamic element creation and rendering
   - Event delegation and handling
   - Form submission and validation

## Technologies Used

- **Backend:**
  - Node.js with Express
  - Prisma ORM
  - MongoDB

- **Frontend:**
  - Vanilla JavaScript
  - HTML/CSS

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd project_1
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
     ```
     DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"
     ```

4. **Initialize Prisma**
   ```
   npx prisma generate
   npx prisma db push
   ```

5. **Start the server**
   ```
   node server.js
   ```

6. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /quotes  | Fetch all quotes |
| PUT    | /quote   | Create a new quote |
| DELETE | /quote?id=:id | Delete a quote by ID |

## Project Structure

```
project_1/
├── prisma/
│   └── schema.prisma    # Database schema
├── public/
│   └── index.html       # Frontend application
├── server.js            # Express server
├── .env                 # Environment variables
└── README.md            # Documentation
```