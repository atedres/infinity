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

## Deployment

To make your application accessible to everyone on the internet, you need to deploy it. This project is configured for Firebase App Hosting.

### 1. Install Firebase CLI

If you don't have it already, install the Firebase Command Line Interface (CLI) globally on your machine.

```bash
npm install -g firebase-tools
```

### 2. Log in to Firebase

Log in to your Firebase account using the CLI.

```bash
firebase login
```

### 3. Deploy the Application

In your project's root directory, run the following command to deploy your app:

```bash
firebase deploy
```

The CLI will build your Next.js application and deploy it to Firebase App Hosting.

### 4. Authorize Your Public Domain

This is a critical final step for authentication to work on your live site.

1.  After deployment, the Firebase CLI will give you a public URL for your application. It will look something like `https://infinity-d0fa5.web.app` or `https://infinity-d0fa5.firebaseapp.com`.
2.  Copy this URL.
3.  Go to the [Firebase Console](https://console.firebase.google.com/) and open your project.
4.  Navigate to **Build > Authentication > Settings > Authorized domains**.
5.  Click **Add domain** and paste the public URL you copied.

Once you add your live app's URL to the authorized domains, anyone will be able to visit your site and sign up or log in.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code.
