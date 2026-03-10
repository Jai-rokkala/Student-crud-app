import { useState } from "react"
import StudentTable from "./components/StudentTable"
import StudentForm from "./components/StudentForm"
import type { Student } from "./types/Student"
import { exportStudentsToExcel } from "./utils/exportExcel"
import ConfirmDeleteModal from "./components/ConfirmDeleteModal"

function App() {

  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Rahul", email: "rahul@email.com", age: 20 },
    { id: 2, name: "Riya", email: "riya@email.com", age: 22 },
    { id: 3, name: "Ketan", email: "ketan@email.com", age: 18 },
    { id: 4, name: "Soham", email: "soham@email.com", age: 28 }
  ])

  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [studentToDelete, setStudentToDelete] = useState<number | null>(null)
  const [search, setSearch] = useState("")

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student])
  }

  const updateStudent = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    )

    setEditingStudent(null)
  }

  const openDeleteModal = (id: number) => {
    setStudentToDelete(id)
    setIsDeleteModalOpen(true)
  }

  const confirmDeleteStudent = () => {
    if (studentToDelete !== null) {
      setStudents((prev) =>
        prev.filter((student) => student.id !== studentToDelete)
      )
    }

    setIsDeleteModalOpen(false)
    setStudentToDelete(null)
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-gray-900">
            Student Dashboard
          </h1>

        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6">

        <div className="mb-6 flex">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg w-64">
            <p className="text-sm opacity-80">Total Students</p>
            <h2 className="text-3xl font-bold">{students.length}</h2>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-60"
          />

          <button
            onClick={() => exportStudentsToExcel(students)}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
          >
            Export to Excel
          </button>

        </div>

        <StudentForm
          onAddStudent={addStudent}
          onUpdateStudent={updateStudent}
          editingStudent={editingStudent}
        />

        <StudentTable
          students={filteredStudents}
          onDeleteStudent={openDeleteModal}
          onEditStudent={setEditingStudent}
        />

        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDeleteStudent}
        />

      </div>

    </div>
  )
}

export default App