import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const pgConfig: PostgresConnectionOptions = {

      // Don't put his here, Instead put in the env file
      url: "",
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