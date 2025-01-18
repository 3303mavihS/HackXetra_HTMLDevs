# TezuVibe - Social Media Platform for University Students

Welcome to **TezuVibe**, a social media platform exclusively designed for university students! This project was developed by a team of five during the Hackathon organized at Tezpur University as part of the computer science fair, **TechXetra**.

## 🚀 Overview

SocialConnect is a robust platform where university students can connect, collaborate, and stay updated on campus events and activities. It comes with a variety of features such as event creation, page creation, groups, friends, followers, and real-time messaging, all tailored to foster a vibrant university community.

---

## 🛠️ Features

1. **User Authentication**:

   - Firebase Authentication for secure login/signup using email and password.

2. **Event Management**:

   - Create, manage, and join university events with ease.

3. **Pages**:

   - Create and manage pages for clubs, organizations, or specific interests.

4. **Groups and Communities**:

   - Create and join groups to engage in meaningful discussions.

5. **Friends and Followers**:

   - Add friends and follow users to stay connected.

6. **Real-Time Messaging**:

   - Chat with friends or group members in real-time.

7. **Responsive Design**:
   - Fully responsive user interface built with modern frameworks for seamless experience across devices.

---

## 🏗️ Tech Stack

### client

- **Next.js**: For building a scalable, high-performance React-based client.
- **shadcdn**: For designing modern UI components with TailwindCSS integration.

### server

- **Express.js**: Lightweight and robust server framework for handling API requests.

### Database

- **PostgreSQL**: Relational database for managing user data, posts, events, and other resources.
- **Prisma**: ORM for efficient database interactions.

### Authentication

- **Firebase Authentication**: Secure authentication for user login and registration.

### Others

- **Socket.io**: For enabling real-time messaging.
- **Cloud Storage**: For handling user-uploaded images and files.

---

## 🚧 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/3303mavihS/HackXetra_HTMLDevs.git
   cd HackXetra_HTMLDevs
   ```

2. Install dependencies for the client and server:

   ```bash
   # client
   cd client
   npm install

   # server
   cd ../server
   npm install
   ```

3. Set up environment variables:

   - Create `.env` files in the `client` and `server` directories.
   - Add Firebase, PostgreSQL, and other required configurations.

4. Run the development servers:

   ```bash
   # client
   cd client
   npm run dev

   # server
   cd ../server
   npm start
   ```

5. Access the application at `http://localhost:3000`.

---

## 🎨 Folder Structure

### client (`/client`):

- **components/**: Reusable UI components.
- **pages/**: Next.js pages.
- **styles/**: Styling files.

### server (`/server`):

- **routes/**: API endpoints.
- **models/**: Database models using Prisma.
- **controllers/**: Business logic.

---

## 📚 Documentation

### API Endpoints

- **User Authentication**:
  - POST `/api/auth/login`
  - POST `/api/auth/register`
- **Event Management**:
  - GET `/api/events`
  - POST `/api/events`
- **Messaging**:
  - GET `/api/messages`
  - POST `/api/messages`

### Database Schema

Refer to the `prisma/schema.prisma` file for a detailed database schema.

---

## 🤝 HackXetra_HTMLDevs - Team Name

- **Anand Sharma** - Project Lead
- **Samrat Saha** - Database Developer
- **Shivam Sharma** - FrontEnd Developer
- **Ripunjay Chaudhary** - BackEnd Developer
- **Aniket** - BackEnd Developer

---

## 🏆 Acknowledgments

- Thanks to Tezpur University and the organizers of TechXetra for hosting an amazing hackathon.
- Special thanks to the mentors and judges for their guidance and feedback.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Future Enhancements

- Implement push notifications for real-time updates.
- Add AI-based recommendations for events and groups.
- Expand to support multiple universities.

Feel free to contribute by creating issues or submitting pull requests!
