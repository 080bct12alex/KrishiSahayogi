# Krishi Sahayogi - Backend

The central API server for Krishi Sahayogi, built with **Node.js** and **Express**. It handles user authentication, marketplace transactions, and community forum data.

## Capabilities

*   **Auth:** secure JWT-based authentication.
*   **Marketplace:** CRUD operations for agricultural listings.
*   **Proxy:** securely routes requests to the Python AI server if needed.

## Setup & Installation

1.  Navigate to the directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up Environment Variables (`.env`):
    ```env
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/krishi_sahayogi
    JWT_SECRET=your_jwt_secret
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```

## API Endpoints (Snapshot)

*   `POST /api/auth/register`: Register new user
*   `POST /api/auth/login`: Login
*   `GET /api/marketplace`: Fetch listings
*   `POST /api/marketplace`: Create listing
