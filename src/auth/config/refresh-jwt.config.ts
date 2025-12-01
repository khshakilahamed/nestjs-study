import { registerAs } from "@nestjs/config";
import { JwtSignOptions } from "@nestjs/jwt";

export default registerAs("jwt", (): JwtSignOptions => ({
      secret: process.env.REFRESH_JWT_SECRET,
      expiresIn: 7 * 24 * 60 * 60 * 1000,
}))