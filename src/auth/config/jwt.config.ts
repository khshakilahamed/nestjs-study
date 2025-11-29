import { registerAs } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";

export default registerAs("jwt", (): JwtModuleOptions => ({
      secret: process.env.JWT_SECRET,
      signOptions: {
            expiresIn: 24 * 60 * 60 * 1000,
      },
}))