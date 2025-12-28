import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Employee } from './employees.entity';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
      constructor(private readonly employeeService: EmployeesService){}

      @Post()
      async createEmployee(@Body() body: Partial<Employee>): Promise<Employee>{
            return this.employeeService.create(body);
      }

      @Get()
      async findAll(): Promise<Employee[]>{
            return this.employeeService.findAll();
      }

      @Get(':id')
      async findOne(@Param('id') id: number): Promise<Employee>{
            return this.employeeService.findOne(id);
      }
      
}
