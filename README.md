# Book Heaven

[Live Site](https://book-heaven2.web.app)

Book Heaven is a modern web application that allows users to explore, add, and manage books. It is built with React, Tailwind CSS, and Firebase for authentication and data management. The platform is designed to provide a smooth user experience across all devices.

## Features

- **Browse All Books:** Users can explore a wide collection of books with detailed information including title, author, genre, rating, and summary.  
- **Add & Manage Books:** Authenticated users can add new books, update existing ones, or delete their own books.  
- **Responsive Design:** Fully responsive layout with mobile-friendly grid view and desktop table view.  
- **Real-time Comments:** Users can leave comments on books, and comments update in real-time.  
- **Authentication:** Secure user login and registration powered by Firebase.  
- **Interactive UI:** Includes theme toggle, toast notifications, loader animations, and modal forms for updates.  

## Technologies Used

- **React** – Frontend library for building interactive UI.  
- **Tailwind CSS & DaisyUI** – For styling and responsive design.  
- **Firebase** – Authentication and user management.  
- **Axios** – HTTP client for API calls.  
- **React Router** – Routing and navigation.  
- **SweetAlert2 & React Hot Toast** – User notifications and alerts.  
- **Swiper & AOS** – Carousel and animations (optional).  

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-heaven-client.git
   ```
2. Navigate to the project folder:
   ```bash
   cd book-heaven-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
book-heaven-client/
├─ src/
│  ├─ components/      # Reusable components like Navbar, Footer, Loader
│  ├─ pages/           # Page components (AllBooks, BookDetails, MyBooks, etc.)
│  ├─ Context/         # Auth context for managing user state
│  ├─ App.jsx
│  └─ main.jsx
├─ public/             # Static assets
├─ package.json
└─ tailwind.config.js
```

## Live Demo

Check out the live website [here](https://book-heaven2.web.app).

---

**Book Heaven** aims to create a simple yet interactive experience for book lovers to explore and manage their favorite books.

