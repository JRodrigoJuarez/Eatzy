# Eatzy - MERN Stack Food Ordering Website

## Project Overview

Eatzy is a full-stack food ordering website built using the MERN stack. It allows users to browse food items, add them to a cart, and place orders securely using Stripe. The platform includes user and admin panels, login/signup functionality, role-based access, and complete order and product management.

## Features

- User: Signup/Login, browse menu, add to cart, place orders, view order history
- Admin: Add/edit/delete items, manage orders
- Secure authentication with JWT and Bcrypt
- Stripe payment integration
- Role-based access with protected APIs
- Responsive design with file upload and user alerts

## Tech Stack

- Frontend: React  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Auth: JWT, Bcrypt  
- File Uploads: Multer  
- Payments: Stripe

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/docs/keys) account for payment integration

## Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/AsmitaMishra24/Eatzy.git
cd Eatzy
```

### 2. Set Up the Backend
Navigate to the backend folder and install the required dependencies:
```bash
cd backend
npm install
```

Create a ```.env``` file in the backend folder with the following configuration:
```.env
PORT=4000
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL="http://localhost:5174"
BACKEND_URL="http://localhost:4000"
```

Start the backend server:
```bash
npm run server
```
This will start the server on ```http://localhost:4000```.


### 3. Set Up the Admin Panel
Open another terminal, navigate to the admin folder, and install the required dependencies:
```bash
cd admin
npm install
```

Start the admin panel:
```bash
npm run dev
```

This will start the admin panel on ```http://localhost:5173```.

### 4. Set Up the Frontend
Open another terminal, navigate to the frontend folder, and install the required dependencies:
```bash
cd frontend
npm install
```

Start the frontend:
```bash
npm run dev
```

This will start the frontend on ```http://localhost:5174```.

### 5. Open the Application

Backend: ```http://localhost:4000```

Admin Panel: ```http://localhost:5173```

Frontend: ```http://localhost:5174```

## Screenshots

### User Side

**Homepage**  
<img src="https://github.com/user-attachments/assets/3a19b45a-b501-4d36-a768-69145ae4f888"/>

**Login Page**  
<img src="https://github.com/user-attachments/assets/2bc2970d-e2a0-4e09-b39d-132d6959f079"/>

**Explore Menu**  
<img src="https://github.com/user-attachments/assets/6de90521-89fc-452b-8e9c-0bed795a3693"/>

**Cart Page**  
<img src="https://github.com/user-attachments/assets/516c7292-150c-4bcb-8f72-8d4b1634f285"/>

**Make Payment Page**  
<img src="https://github.com/user-attachments/assets/9f5e273e-7fde-43b3-ba3d-6bd3a79a8cde"/>

**Stripe Payment Gateway**  
<img src="https://github.com/user-attachments/assets/7ca90bcd-d065-4e64-a524-929c6bb265e9"/>

**Track Order & Order History**  
<img src="https://github.com/user-attachments/assets/95926a2b-8758-42fd-9923-a0fcb54e035a"/>

---

### Admin Side

**Add Item Page**  
<img src="https://github.com/user-attachments/assets/46f48ffc-a53d-43c2-aa31-ad51290f1a86"/>

**List of Items Page**  
<img src="https://github.com/user-attachments/assets/460c7c27-444e-43d3-958b-aa8158342016"/>

**Order Handling Page**  
<img src="https://github.com/user-attachments/assets/ec4a186f-9485-4c76-82e1-f8a47537027a"/>

## Notes

1. Ensure that the `.env` variables are correctly configured in the backend.
2. Make sure MongoDB and Stripe services are active and connected.

## Developer

This project was developed by [Asmita Mishra](https://github.com/AsmitaMishra24).

## Contact

For any questions or feedback, feel free to reach out at:
- **GitHub**: [AsmitaMishra24](https://github.com/AsmitaMishra24)
- **LinkedIn**: [Asmita Mishra](https://www.linkedin.com/in/asmitamishra1/)
