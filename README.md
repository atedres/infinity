# Infinity Hub - Firebase Studio Project

This is a NextJS starter project built in Firebase Studio. It includes a multi-faceted hub for startups, freelancers, and corporations.

## Getting Started

The main entry point of the application is `src/app/page.tsx`.

## Running Locally

You can run this project on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm or yarn

### 1. Set Up Environment Variables

This project connects to Firebase for database and authentication services. You will need to create a `.env.local` file in the root directory of the project.

Create the file and add your Firebase credentials in the following format:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Note:** The `.env.local` file should never be committed to version control.

### 2. Install Dependencies

Open your terminal, navigate to the project's root directory, and run the following command to install the necessary packages:

```bash
npm install
```

### 3. Run the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

The application will be running at [http://localhost:9002](http://localhost:9002).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code.
