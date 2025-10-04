# Booking App MERN

A full-stack hotel booking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to browse hotels, make bookings, and manage their reservations securely.

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Demo Account](#demo-account)
- [Setup and Installation](#setup-and-installation)

## Features

🔑 _Key Features of Our Booking App:_

1. **User Authentication**: Secure login and registration using HTTP cookies and JWT for a seamless user experience.
2. **Hotel Management**: Add, edit, and view hotels with comprehensive form handling and state management.
3. **Image Uploads**: Integrate image uploads, a vital feature for hotel listings.
4. **Search, Sort, & Filter**: Enhance usability with search, sort, and filter functionalities for hotels.
5. **Online Payments**: Secure hotel booking payments powered by Stripe.
6. **Booking Management**: View and manage bookings efficiently.
7. **Recent Hotels on Home Page**: Display recently added hotels dynamically on the home page.

## How It Works

The Booking App provides a user-friendly platform for hotel reservations:

- Users can sign up or log in using their email and password (or use the demo account).
- Browse hotels on the home page, with recently added ones highlighted.
- Use search, sort, and filter options to find the perfect hotel.
- View hotel details, upload images (for hotel owners), and make bookings.
- Complete payments securely via Stripe integration.
- Manage bookings through a dedicated dashboard.

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **React Router**: For navigation and routing.
- **React Hook Form**: For form management.
- **React Query**: For data fetching and caching.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Tokens for authentication.
- **Cloudinary**: For image upload and management.
- **Stripe**: For payment processing.

## Demo Account

To explore the app, use the following credentials:

- **Email**: test@mail.com
- **Password**: Test@123

Alternatively, users can register with their own email addresses.

## Testing Payments

To test the booking process with payments, use Stripe's test credit card details during checkout. This simulates a successful payment without real charges:

- **Card Number**: 4242 4242 4242 4242
- **Expiry Date**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)
- **ZIP Code**: Any (e.g., 12345)

Follow the booking flow: Select a hotel, proceed to checkout, enter the test card details, and complete the payment to verify the reservation.

## Setup and Installation

Follow these steps to set up and run the Booking App MERN project locally.

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.

### Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ersinisgor/booking_app_MERN
cd booking_app_MERN
```

## Backend Configuration

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

```bash
MONGODB_CONNECTION_STRING=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-jwt-secret-key>
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
STRIPE_API_KEY=<your-stripe-api-key>
```

- Replace placeholders (e.g., `<your-mongodb-connection-string>`) with your actual credentials.
- Obtain these from:
  - MongoDB Atlas for `MONGODB_CONNECTION_STRING`.
  - Cloudinary for Cloudinary variables.
  - Stripe for `STRIPE_API_KEY`.

4. Start the backend server:

```bash
npm start
```

## Frontend Configuration

1. Navigate to the front end directory:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:

```bash
VITE_API_BASE_URL=http://localhost:7000
VITE_STRIPE_PUB_KEY=<your-stripe-publishable-key>
```

- Replace `<your-stripe-publishable-key>` with your Stripe publishable key from Stripe.

4. Start the frontend application:

```bash
npm run dev
```

- The app will be available at `http://localhost:5173`.

### Notes

- Ensure the backend is running before starting the frontend.
- Configure all environment variables correctly to avoid runtime errors.
