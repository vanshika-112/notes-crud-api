# Notes CRUD API

A simple backend practice project built using **Node.js, Express.js, and MongoDB**. This project provides REST APIs to create, read, update, and delete notes.

Each note contains a title and a description, which are stored in a MongoDB database. Postman is used to test and verify the API endpoints.

## Features

- Create a new note
- Retrieve all notes
- Update description of an existing note
- Delete a note
- Store notes in MongoDB
- Test API endpoints using Postman

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Postman** – API testing tool

## Project Structure

```text
notes-api/
├── node_modules/
├── src/
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   └── note.model.js
│   └── app.js
├── package-lock.json
├── package.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/vanshika-112/notes-crud-api.git
```

### 2. Navigate to the project directory

```bash
cd notes-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

If you have configured a development script using Nodemon, you can run:

```bash
npm run dev
```

The server should now be running at:

`http://localhost:3000`

## API Endpoints

Assuming your notes routes are mounted at `/api/notes`, the following endpoints can be used to perform CRUD operations.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes` | Get all notes |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Example Request

### Create a Note

**Endpoint:** `POST /api/notes`

**Request Body (JSON):**

```json
{
  "title": "My First Note",
  "description": "This is my first note created using the Notes API."
}
```

### Example Response

The response format depends on your implementation. A successful response might look like this:

```json
{
  "_id": "example_note_id",
  "title": "My First Note",
  "description": "This is my first note created using the Notes API.",
  "__v": 0
}
```

## Testing with Postman

1. Start the backend server.
2. Open Postman.
3. Create a request using the desired HTTP method.
4. Enter the appropriate API endpoint.
5. For POST and PUT requests, select **Body → raw → JSON** and provide the required data.
6. Send the request and verify the response.

Test the POST, GET, PUT, and DELETE endpoints to ensure that the CRUD operations work correctly.

## Learning Objectives

Through this project, I practiced:

- Building REST APIs using Node.js and Express.js
- Performing CRUD operations
- Connecting a backend application to MongoDB
- Handling HTTP requests and responses
- Testing API endpoints using Postman
- Understanding basic backend project structure

## Future Improvements

- Add input validation
- Implement proper error handling
- Add user authentication
- Improve API response messages
- Add pagination for retrieving notes

## Author

Vanshika

A beginner-friendly backend project created for learning and practicing REST API development.
