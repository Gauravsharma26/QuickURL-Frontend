<div align="center">

# 🚀 QuickURL Frontend

**A modern React application for shortening URLs, managing links, and viewing click analytics**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Live App](#-live-application) · [Features](#-features) · [Screens](#-screens) · [Getting Started](#-running-locally)

</div>

---

## 🌐 Live Application

🔗 **[quick-url-frontend-liard.vercel.app](https://quick-url-frontend-liard.vercel.app)**

> **⚠️ Note:** Since the backend is deployed on Render's free tier, the first request may take a few seconds while the server spins up from inactivity.

---

## ✨ Features

- 👤 **User Registration** — quick and secure sign-up
- 🔐 **User Login** — authenticated access to the dashboard
- 📊 **Dashboard** — a central hub to manage all your links
- 🔗 **Create Short URLs** — turn long links into compact, shareable ones
- 📋 **Copy Short URLs** — one-click copy to clipboard
- 📈 **Click Analytics** — track how your links are performing
- 📉 **Interactive Graphs** — visualize click trends over time
- 📱 **Responsive Design** — works seamlessly across devices

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Library | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| HTTP Client | Axios |
| Data Fetching | React Query |
| Date Handling | Day.js |
| Icons | React Icons |
| Charts | Recharts |

---

## 📁 Project Structure

```
src
├── api          # API request handlers (Axios instances, endpoints)
├── assets       # Images, icons, and static assets
├── components   # Reusable UI components
├── contextApi   # React Context providers for global state
├── pages        # Page-level components (Home, Login, Dashboard, etc.)
├── routes       # Application routing configuration
└── utils        # Helper functions and utilities
```

---

## 🖥️ Screens

| Screen | Description |
|---|---|
| **Home Page** | Landing page introducing the app |
| **Register** | New user sign-up |
| **Login** | Authenticate and access the dashboard |
| **Dashboard** | Create and manage short URLs |
| **URL Analytics** | View click stats and interactive graphs for each link |

---

## ⚙️ Running Locally

### Prerequisites
- Node.js 18+
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gauravsharma26/QuickURL-Frontend.git
   cd QuickURL-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   VITE_BACKEND_URL=http://localhost:8080
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

5. The app will be available at:
   ```
   http://localhost:5173
   ```

---

## ☁️ Deployment

| Component | Platform |
|---|---|
| Frontend | [Vercel](https://vercel.com/) |
| Backend | [Render](https://render.com/) |

---

## 🔗 Backend Repository

This frontend connects to the QuickURL backend API:

**[github.com/Gauravsharma26/QuickURL-Backend](https://github.com/Gauravsharma26/QuickURL-Backend)**

---

## 👨‍💻 Author

**Gaurav Sharma**

[![GitHub](https://img.shields.io/badge/GitHub-Gauravsharma26-181717?logo=github)](https://github.com/Gauravsharma26)

---

<div align="center">

If you find this project useful, consider giving it a ⭐ on GitHub!

</div>
