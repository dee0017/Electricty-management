

# Electricity Management Dashboard

## Project Overview

The **Electricity Management Dashboard** is a web application designed to help users easily manage their electricity usage, make payments, and stay informed with timely notifications. Users can track their usage, view transaction history, and receive low-balance and due-date alerts.

This project includes a user-friendly interface, sleek design, and essential pages like the dashboard, payment page, transaction history, profile page, notifications, and landing page. The app integrates with Firebase and Paystack for secure authentication and payments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Pages](#pages)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Payment Integration**: Seamless electricity payment with Paystack integration.
- **Usage Tracking**: Real-time data on electricity usage.
- **Notifications**: Timely alerts for low balance, payment reminders, and more.
- **Transaction History**: Easily view past payments and usage details.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Sleek, Glassmorphic Interface**: Modern design with glassmorphism effects for a professional look.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (for authentication and database)
- **Payment Processing**: Paystack
- **Styling**: CSS with a glassmorphic effect
- **Icons**: Font Awesome

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dee0017/Electricty-management.git

   ```
2. **Navigate into the Project Directory**:
   ```bash
   cd electricity-management
   ```
3. **Open the Project in a Code Editor** (like VS Code):
   ```bash
   code .
   ```
4. **Install Firebase and Paystack SDKs**:
   Ensure the Firebase and Paystack SDKs are linked in your HTML files for authentication and payment processing.

5. **Add Your Firebase Configuration**:
   Replace `YOUR_PUBLIC_KEY` in `payment.js` and `firebaseConfig` with your Firebase configuration details in `firebase-config.js`.

6. **Run a Local Server**:
   If using VS Code, you can use the **Live Server** extension to serve the files locally.
   
## File Structure

```
electricity-management-dashboard/
├── index.html                # Landing Page
├── dashboard/
│   ├── dashboard.html        # Main dashboard page
│   ├── payment.html          # Payment page
│   ├── history.html          # Transaction history page
│   ├── profile.html          # Profile page
│   └── notifications.html    # Notifications page
├── auth/
│   ├── login.html            # Login page
│   ├── signup.html           # Signup page
├── css/
│   └── styles.css            # Main CSS file for styling
├── js/
│   ├── auth.js               # Authentication JavaScript
│   ├── payment.js            # Paystack payment integration
│   ├── history.js            # History filtering
│   ├── profile.js            # Profile editing
│   └── notifications.js      # Notifications management
└── README.md                 # Project README
```

## Usage

1. **Launch the Landing Page**:
   - Open `index.html` to start on the landing page, where users can learn more about the app and sign up.

2. **Navigate the Dashboard**:
   - After logging in, users are directed to the dashboard, where they can view current balance, usage, and access other features.

3. **Make Payments**:
   - Go to the payment page to make electricity payments using Paystack. Enter the amount, select payment method, and complete the transaction securely.

4. **Check Transaction History**:
   - On the history page, users can view past payments and usage records.

5. **Profile Management**:
   - Users can view and edit personal information on the profile page.

6. **Receive Notifications**:
   - The notifications page displays alerts related to electricity usage, due payments, and other important updates.

## Pages

- **Landing Page (index.html)**: Introduces the service and includes a call-to-action for new users.
- **Dashboard (dashboard.html)**: Provides an overview of the user’s current balance and usage.
- **Payment Page (payment.html)**: Allows users to make payments securely.
- **History Page (history.html)**: Displays a list of all past transactions with filtering options.
- **Profile Page (profile.html)**: Shows the user's information and allows editing.
- **Notifications Page (notifications.html)**: Displays alerts and notifications.

## Contributing

We welcome contributions! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Commit and push**:
   ```bash
   git commit -m "Add new feature"
   git push origin feature-branch
   ```
5. **Open a pull request** on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

