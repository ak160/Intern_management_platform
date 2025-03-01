# Intern Management Platform

## Introduction

The Intern Management Platform is a web application designed to help manage intern applications and compensations efficiently. This platform includes a frontend built with React and a backend using Node.js, Express, and MongoDB. It supports user registration and authentication, and allows authenticated users to manage intern applications and compensations.

## Features

- User registration and authentication
- Create, read, update, and delete intern applications
- Create, read, update, and delete compensation records
- Secure API endpoints using JWT for authentication
- Responsive UI built with React

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS

## Installation

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (either local installation or MongoDB Atlas)
- npm (comes with Node.js)

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/intern-management-platform.git
   cd intern-management-platform/backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a .env file in the backend directory and add the following environment variables**:
   ```env
   MONGO_URI=mongodb://localhost:27017/intern-management
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. **Start the backend server**:
   ```bash
   node server.js
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../intern-management-platform
    ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the React development server**:
   ```bash
   npm start
   ```
### Usage
  1. Open your browser and navigate to http://localhost:5000.
  2. Register a new user.
  3. Log in with the newly registered user credentials.
  4. Use the navigation links to manage applications and compensations.

### API Endpoints
#### Auth Routes
- Register a new user: 'POST /api/auth/register'.
  - Request body: `{ "name": "John Doe", "email": "john.doe@example.com", "password": "password123" }`
- Login: POST `/api/auth/login`
  - Request body: `{ "email": "john.doe@example.com", "password": "password123" }`
 
### Compensation Routes
- Create a new compensation: `POST /api/compensation`
   - Request body: `{ "name": "Internship", "amount": 5000, "date": "2024-06-01" }`
- Get all compensations: `GET /api/compensation`

### Application Routes
- Create a new application: `POST /api/application`
  - Request body: `{ "name": "John Doe", "position": "Software Engineer Intern", "status": "pending" }`
- Get all applications: `GET /api/application`

### Folder Structure
```plaintext
intern-management-platform/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Compensation.js
│   │   └── Application.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── compensation.js
│   │   └── application.js
│   ├── server.js
│   └── .env
├── intern-management-platform/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── ApplicationForm.js
│   │   │   ├── ApplicationList.js
│   │   │   ├── CompensationForm.js
│   │   │   └── CompensationList.js
│   │   ├── pages/
│   │   │   ├── ApplicationPage.js
│   │   │   ├── CompensationPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   └── index.js
│   └── package.json
```
### Contributing
Contributions are welcome! Please fork the repository and create a pull request to propose your changes.

### License
This project is licensed under the MIT License.

