import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
      constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

      async createStudent(data: Partial<Student>): Promise<Student> {
            const newStudent = new this.studentModel(data);

            return newStudent.save();
      }

      async getAllStudents(): Promise<Student[]> {
            const students = await this.studentModel.find().exec();

            return students;
      }

      async getStudentById(id: string): Promise<Student | null> {
            return this.studentModel.findById(id).exec();
      }

      // full update
      async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
            // return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();

            const updated = this.studentModel.findByIdAndUpdate(id, {
                  name: data.name ?? null,
                  age: data.age ?? null,
                  email: data.email ?? null,
            }, { overwrite: true, new: true }).exec();

            return updated;
      }

      // partial update
      async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
            return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
      }

      async deleteStudent(id: string): Promise<Student | null> {
            return this.studentModel.findByIdAndDelete(id).exec();
      }
}
