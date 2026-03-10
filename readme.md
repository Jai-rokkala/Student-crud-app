# 🎓 Students Management System

A simple and modern **React + TypeScript CRUD application** for managing student records.
Users can **add, update, delete, search, and export student data to Excel** using a clean dashboard-style interface built with **Tailwind CSS**.

---

# 🚀 Live Demo

👉 https://student-crud-app-seven.vercel.app

---

# ✨ Features

* ➕ Add new students
* 📋 View students in a table
* ✏️ Edit student information
* 🗑️ Delete students with confirmation modal
* 🔍 Search students by name or email
* 📥 Export students data to Excel
* ✅ Form validation

  * Required fields
  * Email validation
  * Name and age validation
* 🎨 Clean responsive UI using Tailwind CSS
* 📊 Dashboard card showing total students

---

# 🛠 Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React        | UI library                   |
| TypeScript   | Type safety                  |
| Vite         | Fast development environment |
| Tailwind CSS | Styling                      |
| XLSX         | Excel export functionality   |
| File Saver   | Download Excel file          |

---

# 📂 Project Structure

```id="structure1"
src
│
├── components
│   ├── StudentForm.tsx
│   ├── StudentTable.tsx
│   └── ConfirmDeleteModal.tsx
│
├── types
│   └── Student.ts
│
├── utils
│   └── exportExcel.ts
│
├── styles
│
├── App.tsx
└── main.tsx
```

---

# ⚙️ Installation

Clone the repository:

```id="install1"
git clone https://github.com/Jai-rokkala/Student-crud-app.git
```

Move into the project folder:

```id="install2"
cd students-crud-app
```

Install dependencies:

```id="install3"
npm install
```

Run the development server:

```id="install4"
npm run dev
```

Open in browser:

```id="install5"
http://localhost:5173
```

---

# 📦 Build for Production

```id="build1"
npm run build
```

---

# 📌 Key Concepts Demonstrated

* React component architecture
* CRUD operations with state management
* Controlled forms in React
* TypeScript interfaces and typing
* Modal state management
* Data export to Excel
* Responsive UI using Tailwind CSS

---

