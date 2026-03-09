import { useState } from "react"
import StudentTable from "./components/StudentTable"
import StudentForm from "./components/StudentForm"
import type { Student } from "./types/Student"

function App() {

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@email.com",
      age: 20
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@email.com",
      age: 22
    }
  ])

  const addStudent = (student: Student) => {
    setStudents([...students, student])
  }

  return (
    <div>
      <h1>Students CRUD Application</h1>

      <StudentForm onAddStudent={addStudent} />

      <StudentTable students={students} />

    </div>
  )
}

export default App