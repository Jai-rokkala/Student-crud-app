import type { Student } from "../types/Student"

type Props = {
  students: Student[]
  onDeleteStudent: (id: number) => void
  onEditStudent: (student: Student) => void
}

function StudentTable({ students, onDeleteStudent, onEditStudent }: Props) {

  return (
    <table className="w-full border-collapse">

      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Age</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>

        {students.map((student) => (

          <tr key={student.id} className="border-t hover:bg-gray-50">

            <td className="p-3">{student.name}</td>
            <td className="p-3">{student.email}</td>
            <td className="p-3">{student.age}</td>

            <td className="p-3 space-x-2">

              <button
                onClick={() => onEditStudent(student)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Edit
              </button>

              <button
                onClick={() => onDeleteStudent(student.id)}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  )
}

export default StudentTable