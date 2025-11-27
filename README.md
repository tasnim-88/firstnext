# 📦 NextMart — E-Commerce Demo App

NextMart is a simple full-stack e-commerce demo application built using **Next.js (App Router)**, **NextAuth.js** for authentication, and a lightweight **Express.js** backend.  
The app includes both public and protected pages, allowing authenticated users to add and manage products.  
The UI is clean, responsive, and ideal for learning or demonstration purposes.

---

## 🧰 Setup & Installation

### 1. Clone the Project
```bash
git clone https://github.com/tasnim-88/firstnext.git
cd firstnext
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables  
Create `.env.local` in the root:

```
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

BACKEND_URL=http://localhost:5000
```

### 4. Run Backend
```bash
cd backend
npm install
npm start
```

Backend runs at:
```
http://localhost:5000
```

### 5. Run Frontend
```bash
npm run dev
```

Frontend runs at:
```
http://localhost:3000
```

---

## 📚 Route Summary

### Public Routes
| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Login page |
| `/register` | Register page |
| `/products` | Product listing |
| `/products/[id]` | Product details |

### Protected Routes
| Route | Description |
|--------|------------|
| `/add-product` | Add a new product (requires login) |
| `/manage-products` | Manage all products (requires login) |

---


