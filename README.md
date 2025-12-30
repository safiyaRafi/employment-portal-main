# Mini Employee Management Portal

A modern, full-stack Employee Management System suitable for small businesses or internal use. Built with a focus on clean code, modern UI, and simplicity.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Headless UI, Lucide React
- **Backend**: Node.js, Express, Sequelize (SQLite)
- **Database**: SQLite (Local embedded database)

## Features
- **Authentication**: Admin login with JWT (seeded credentials).
- **Dashboard**: Overview of company stats (Employees, Departments, Recent Hires).
- **Employee Management**:
    - List all employees with pagination (client-side for simplicity).
    - Add new employees via modal form.
    - Edit existing employee details.
    - Delete employees.
    - Search/Filter employees by name or department.

## Setup Instructions

### Prerequisites
- Node.js installed (v16+ recommended).

### 1. Backend Setup
1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Seed the database (creates Admin user and sample data):
    ```bash
    npm run seed
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```
    - Server runs on `http://localhost:5000`

### 2. Frontend Setup
1.  Open a new terminal and navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    - Application runs on `http://localhost:5173`

### 3. Login Credentials
- **Username**: `admin`
- **Password**: `password123`

## Project Structure
```
/client          # Frontend (React + Tailwind)
  /src
    /components  # Reusable UI components
    /pages       # Feature pages (Login, Dashboard, Employees)
    /context     # Global state (Auth)
/server          # Backend (Node.js + Express)
  /routes        # API Endpoints
  /models        # Sequelize Models
  /database      # SQLite DB file
```

## API Documentation
- `POST /api/auth/login`: Authenticate user.
- `GET /api/employees`: Get all employees.
- `POST /api/employees`: Create employee.
- `PUT /api/employees/:id`: Update employee.
- `DELETE /api/employees/:id`: Delete employee.

## Design Decisions
- **SQLite** was chosen for zero-configuration persistence, making it easy to run locally.
- **Tailwind CSS** provides a modern, utility-first design system for rapid UI development.
- **Headless UI** ensures accessibility for interactive components like Modals.


