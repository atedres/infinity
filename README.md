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

To make your application accessible to everyone on the internet, you need to deploy it. Below are instructions for two popular services.

### Option 1: Deploying to Firebase App Hosting

This project is configured by default for Firebase App Hosting.

#### 1. Install Firebase CLI

If you don't have it already, install the Firebase Command Line Interface (CLI) globally on your machine.

```bash
npm install -g firebase-tools
```

#### 2. Log in to Firebase

Log in to your Firebase account using the CLI.

```bash
firebase login
```

#### 3. Deploy the Application

In your project's root directory, run the following command to deploy your app:

```bash
firebase deploy
```

The CLI will build your Next.js application and deploy it to Firebase App Hosting.

#### 4. Authorize Your Public Domain (Crucial Step)

1.  After deployment, the Firebase CLI will give you a public URL for your application (e.g., `https://your-project.web.app`). Copy this URL.
2.  Go to the [Firebase Console](https://console.firebase.google.com/) and open your project.
3.  Navigate to **Build > Authentication > Settings > Authorized domains**.
4.  Click **Add domain** and paste the public URL you copied.

### Option 2: Deploying to Vercel

Vercel is another excellent platform for deploying Next.js applications.

#### 1. Push Your Project to GitHub

If you haven't already, push your project to a GitHub repository. Vercel works best by linking directly to a Git repository.

#### 2. Create a Vercel Project

1.  Sign up or log in to your [Vercel account](https://vercel.com).
2.  From your dashboard, click **Add New... > Project**.
3.  Import the GitHub repository you created in the previous step.

#### 3. Configure Environment Variables

Vercel needs access to your Firebase configuration.
1.  In your Vercel project settings, go to **Settings > Environment Variables**.
2.  Add all the variables from your `.env.local` file. For example:
    *   **Name:** `NEXT_PUBLIC_FIREBASE_API_KEY`, **Value:** `your_api_key`
    *   **Name:** `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, **Value:** `your_auth_domain`
    *   ...and so on for all the required keys.

#### 4. Deploy

Once the environment variables are set, trigger a deployment from your Vercel project dashboard. Vercel will automatically detect that it's a Next.js project and build it correctly.

#### 5. Authorize Your Vercel Domain (Crucial Step)

This is the most important step to make sure Firebase Authentication works on your live Vercel site.
1.  After your first successful deployment, Vercel will assign a public URL to your project (e.g., `https://your-project-name.vercel.app`). Copy this URL.
2.  Go to the [Firebase Console](https://console.firebase.google.com/) and open your project.
3.  Navigate to **Build > Authentication > Settings > Authorized domains**.
4.  Click **Add domain** and paste the Vercel URL you copied.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code.
