# Backend - API Creation

## Specifications
Implement APIs to add/edit data in the frontend components.
Two buttons for adding and updating data.
Include functionality to count the number of add/update API calls.
Ensure clean code with proper commenting.
Mention execution time for each API call.
Utilize any database for storage.

## Implementation Overview
- **Backend Framework**: ExpressJS (Node.js)
- **Database**: MongoDB (through Mongoose ORM)
- **Endpoints**:
  - `POST /api/v1/data`: Add data to components.
  - `PUT /api/v1/data/:windowId`: Update data in components.
  - `GET /api/v1/count`: Get the count of add/update API calls.
- **Models**: Utilizes Mongoose for defining schemas and models.
- **Middleware**: Implements CORS and bodyParser middleware for handling requests.

## Key Components and Functionality
- **Database Models**: `transactions` and `windows` models for managing transactional data and window content.
- **API Endpoints**: Implement CRUD operations for adding and updating data, along with a count endpoint.
- **Middleware**: Handle CORS headers and request body parsing.
- **Error Handling**: Proper error handling for API requests.

## Execution
1. Ensure MongoDB is installed and running.
2. Clone the repository locally.
3. Navigate to the backend directory.
4. Install dependencies using `npm install`.
5. Start the server using `npm start`.
6. Access the APIs through the specified routes.

## Additional Notes
- Ensure proper network connectivity and system requirements are met.
- Follow best practices for code maintenance, documentation, and version control.
- Make necessary adjustments to configurations based on deployment environments.
