import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
      private students = [
            { id: 1, name: "Kh. Shakil", age: 27 },
            { id: 2, name: "Shakil", age: 27 },
      ]

      getAllStudents() {
            return this.students;
      }

      getStudentById(id: number) {
            const student = this.students.find((student => student.id === id));

            if (!student) {
                  throw new NotFoundException("Student not found.")
            }

            return student;
      }

      createStudent(data: { name: string; age: number }) {
            const newStudent = { id: this.students?.length + 1, ...data };

            this.students.push(newStudent);

            return newStudent;
      }

      // PUT
      updateStudent(id: number, data: { name: string; age: number }) {
            const index = this.students.findIndex((s) => s.id === id);

            if (index === -1) throw new NotFoundException("Student not found");

            this.students[index] = {
                  id, ...data
            };

            return this.students[index];
      }

      // PATCH
      patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
            const student = this.getStudentById(id);

            Object.assign(student, data);

            return student;
      }

      // DELETE
      deleteStudent(id: number) {
            const index = this.students.findIndex((s) => s.id === id);

            if (index === -1) throw new NotFoundException("Student not found");

            const deleted = this.students.splice(index, 1);

            return deleted;
      }
}
