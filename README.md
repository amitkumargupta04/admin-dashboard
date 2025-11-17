# Role-Based Admin Dashboard (Sample Demo)

**Version:** 1.1  
**Prepared by:** Phantasm Solutions Pvt Ltd  

> **Note:** This is a **sample/demo README** with mock data and screenshots for demonstration purposes. All credentials and API calls are simulated.

---

## 🚀 Live Demo
[Sample Demo on Netlify](https://sample-dashboard-demo.netlify.app)

---

## 📂 Tech Stack

- **Frontend:** React 18+ (Hooks)  
- **State Management:** Redux Toolkit + RTK Query (Mock APIs)  
- **Styling:** Tailwind CSS (mobile-first, responsive)  
- **Routing:** React Router v6  
- **Internationalization:** i18next (English & Spanish)  
- **Icons:** React Icons / Lucide-react  
- **Forms:** React Hook Form (mock validation)  
- **Notifications:** react-hot-toast (mock success/error)

---

## 🧩 Features (Sample)

### Authentication & Role-Based Access
- Login portal for **Admin** and **User** (mock credentials):
  - **Admin:** `admin@sample.com / admin123`  
  - **User:** `user@sample.com / user123`
- Role-based sidebar links:
  - Admin: Dashboard, Users, Products, Settings
  - User: Dashboard, Products (view only)
- Logout clears mock state.

### Dashboard
- **Admin:** Sees total users/products & revenue cards.  
- **User:** Sees only Products stats.  

### CRUD (Mock)
- Admin can **create/edit/delete** Users & Products.  
- User can **view products only**.  

### Theming & i18n
- Toggle **Light/Dark Mode** (saved in localStorage).  
- English & Spanish translations.

### Responsive Design
- Sidebar collapses on mobile.  
- Cards and tables adapt to screen size.

---

## 🛣️ Routes (Sample)
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

## 📝 Setup Instructions (Sample)
1. Clone repo:
   ```bash
   git clone https://github.com/sample-user/admin-dashboard-demo.git
   cd admin-dashboard-demo
