import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const pgConfig: PostgresConnectionOptions = {

      // Don't put his here, Instead put in the env file
      url: "postgresql://neondb_owner:npg_9jXcpM8CrUmx@ep-blue-leaf-ahsvbewt-pooler.c-3.us-east-1.aws.neon.tech/realEstateDB?sslmode=require&channel_binding=require",
      type: "postgres",
      port: 3306,
      // entities: [Property],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // make false for production.
}



/* 

// from chatgpt 
export const pgConfig: PostgresConnectionOptions = {
  name: "postgresDB",
  type: "postgres",
  url: process.env.POSTGRES_URL,
  synchronize: true,
  autoLoadEntities: true, // THIS IS ENOUGH, REMOVE entities: []
}; */