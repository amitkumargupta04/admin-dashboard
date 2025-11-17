# Role-Based Admin Dashboard

**Version:** 1.1  
**Prepared by:** Amit Kumar Gupta  

---

## 🚀 Live Demo
https://admin-dashboard-seven-nu-82.vercel.app

---

## 📂 Tech Stack

- React 18+ (Hooks)  
- Redux Toolkit + RTK Query  
- Tailwind CSS  
- React Router v6  
- i18next (English & Spanish)  
- React Icons / Lucide-react  

---

## 🧩 Features

- Single login portal for Admin & User
- Role-based access and sidebar navigation
  - Admin: Full CRUD on Users & Products
  - User: View-only access to Products
- Dark/Light theme toggle
- Internationalization (English & Spanish)
- Responsive layout (mobile-first)
- Reusable components: Button, Input, Modal, Table, Card, Loader, Alert

---

## 🛣️ Routes

| Route                  | Admin | User | Description |
|------------------------|-------|------|-------------|
| `/login`               | ✅    | ✅   | Login Page |
| `/dashboard`           | ✅    | ✅   | Overview |
| `/users`               | ✅    | ❌   | Users list |
| `/users/create`        | ✅    | ❌   | Create user |
| `/products`            | ✅    | ✅   | Products list |
| `/products/:id`        | ✅    | ✅   | Product details |
| `/settings`            | ✅    | ❌   | Theme & Language |

---

## 📝 Setup Instructions

1. Clone the repo:  
   ```bash
   git clone https://github.com/amitkumargupta04/admin-dashboard.git
   cd role-based-admin-dashboard
