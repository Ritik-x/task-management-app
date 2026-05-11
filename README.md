# 🚀 Task Management App (E- AI Assignment)

Live Demo:  
👉 https://task-management-app-production-6b30.up.railway.app/

---

## 📌 Project Overview

This is a **full-stack Task Management Web Application** built as part of the Ethara AI assignment.

The system allows users to:
- Register & login securely
- Create and manage projects
- Create, update, delete and track tasks
- View dashboard analytics
- Admin can manage users

The goal of this project is to demonstrate **real-world full-stack development skills including authentication, API design, database design, and UI/UX quality**.

---

## ⚙️ Tech Stack

### Frontend
- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

### Deployment
- Railway (Frontend + Backend)

---

## 🔐 Authentication System

- JWT-based login & signup
- Password hashing using bcrypt
- Protected routes (frontend + backend)
- Role-based access (User & Admin)

---

## 📁 Core Features

### 👤 User Features
- Signup / Login
- Create projects
- Create tasks under projects
- Set priority (1–5)
- Set start & end time
- Mark task as completed
- View personal dashboard

---

### 📊 Dashboard
- Total tasks overview
- Pending vs completed tasks
- Task progress tracking
- Time-based analytics

---

### 🛠 Admin Panel
- View all registered users
- Role-based access control

---

## 🧠 Backend Features

- REST API architecture
- Clean route separation:
  - `/api/auth`
  - `/api/tasks`
  - `/api/projects`
  - `/api/admin`
- MongoDB relationships between:
  - Users ↔ Tasks
  - Users ↔ Projects
- Centralized error handling
- Input validation middleware

---

## 🎨 UI/UX Highlights

- Clean and modern dashboard UI
- Fully responsive (mobile + desktop)
- Loading states & empty states
- Smooth navigation
- Consistent design system

---

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimized layout
- Desktop dashboard experience
- Adaptive components

---

## 🚀 Setup Instructions

### Frontend
```bash
npm install
npm run dev
