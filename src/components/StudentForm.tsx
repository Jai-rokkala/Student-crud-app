import { useState, useEffect } from "react"
import type { Student } from "../types/student"

type Props = {
  onAddStudent: (student: Student) => void
  onUpdateStudent: (student: Student) => void
  editingStudent: Student | null
}

function StudentForm({ onAddStudent, onUpdateStudent, editingStudent }: Props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name)
      setEmail(editingStudent.email)
      setAge(String(editingStudent.age))
    }
  }, [editingStudent])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !age) {
      setError("All fields are required")
      return
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError("Name should contain only letters")
      return
    }

    if (!email.includes("@")) {
      setError("Invalid email address")
      return
    }

    if (Number(age) <= 0) {
      setError("Age must be greater than 0")
      return
    }

    setError("")

    const studentData: Student = {
      id: editingStudent ? editingStudent.id : Date.now(),
      name,
      email,
      age: Number(age)
    }

    if (editingStudent) {
      onUpdateStudent(studentData)
    } else {
      onAddStudent(studentData)
    }

    setName("")
    setEmail("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      {error && (
        <p className="text-red-500 col-span-4">{error}</p>
      )}

      <input
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        {editingStudent ? "Update" : "Add"}
      </button>

    </form>
  )
}

export default StudentForm