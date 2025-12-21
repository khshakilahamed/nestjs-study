import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schema/developer.schema';
import { Project, ProjectSchema } from './schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Developer.name, schema: DeveloperSchema},
      {name: Project.name, schema: ProjectSchema}
    ]),
  ],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
