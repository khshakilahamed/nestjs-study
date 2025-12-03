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

      async getStudentById(id: string): Promise<Student | null>{
            return this.studentModel.findById(id).exec();
      }
}
