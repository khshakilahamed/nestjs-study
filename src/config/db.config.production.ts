import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";
import * as path from "path";

export default (): PostgresConnectionOptions => ({
      // Don't put his here, Instead put in the env file
      url: process.env.URL,
      type: "postgres",
      port: Number(process.env.PORT ?? 3306),
      // entities: [Property],
      entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
      synchronize: false, // make false for production.
})