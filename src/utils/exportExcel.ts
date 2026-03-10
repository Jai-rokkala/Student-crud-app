import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import type { Student } from "../types/student"

export const exportStudentsToExcel = (students: Student[]) => {

  const worksheet = XLSX.utils.json_to_sheet(students)

  const workbook = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(workbook, worksheet, "Students")

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array"
  })

  const data = new Blob([excelBuffer], {
    type: "application/octet-stream"
  })

  saveAs(data, "students.xlsx")
}