import { useState } from "react"
import type { Student } from "../types/Student"

type Props = {
  onAddStudent: (student: Student) => void
}

function StudentForm({ onAddStudent }: Props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newStudent: Student = {
      id: Date.now(),
      name,
      email,
      age: Number(age)
    }

    onAddStudent(newStudent)

    setName("")
    setEmail("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  )
}

export default StudentForm