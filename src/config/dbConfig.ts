import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";
import * as path from "path";
import { registerAs } from "@nestjs/config";

export default registerAs(
      "dbconfig.dev",
      (): PostgresConnectionOptions => ({
            // Don't put his here, Instead put in the env file
            url: process.env.URL,
            type: "postgres",
            port: Number(process.env.PORT ?? 3306),
            // entities: [Property],
            entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
            synchronize: true, // make false for production.
      })
)