# Ticket Management App

A ticket management application built with **Next.js (App Router)**, **MongoDB**, **Mongoose**, and **Tailwind CSS**. Features a dynamic responsive dashboard, full CRUD operations, and a pure CSS light/dark mode theme toggle.

---

## Features

- **Full CRUD Operations:** Create, view, edit, and delete support tickets in real time.
- **Dynamic Dashboard:** Categorizes tickets automatically with progress bars, priority ratings, and status badges.
- **Pure CSS Light/Dark Theme Toggle:** Seamlessly switch themes using modern CSS `:has()` pseudo-classes.
- **Responsive UI:** Custom-styled glassmorphic dark interface with responsive layouts built using Tailwind CSS.
- **Database Integration:** Persistent data storage using MongoDB Atlas and Mongoose schemas.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** MongoDB Atlas
- **ORM / ODM:** Mongoose
- **Styling:** Tailwind CSS, FontAwesome Icons
- **Language:** JavaScript (ES6+)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance)

---

### Installation & Local Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
   cd ticket-app
   Install dependencies:


    npm install
    Configure Environment Variables:
    Create a .env.local file in the root directory by copying the provided example file:


    cp .env.example .env.local
    Open .env.local and add your MongoDB connection string:

    Code snippet
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ticket_db?retryWrites=true&w=majority
    Run the development server:

    npm run dev
    Open in browser:
    Navigate to http://localhost:3000 to view the application.
   ```

Project Structure
Plaintext
├── app/
│ ├── (components)/ # Reusable UI components (Nav, TicketCard, DeleteBlock, etc.)
│ ├── api/ # Next.js API route handlers (GET, POST, PUT, DELETE)
│ │ └── Tickets/
│ ├── TicketPage/[id]/ # Dynamic edit/create route
│ ├── global.css # Custom Tailwind v4 styling & theme toggle
│ ├── layout.js # Root layout wrapper
│ └── page.jsx # Main dashboard displaying categorized tickets
├── models/ # Mongoose schema definitions (Ticket.js)
├── .env.example # Example environment template
└── .env.local # Local secret keys (ignored by Git)
