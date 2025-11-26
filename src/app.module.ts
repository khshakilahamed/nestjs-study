import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/dbConfig';
import dbConfigProduction from './config/db.config.production';

const devConfig = { port: 3000 };
const proConfig = { port: 4000 };

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig, dbConfigProduction]
    }),
    SongsModule,
    PropertyModule,
    // TypeOrmModule.forRoot(pgConfig),
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV === "production" ? dbConfigProduction : dbConfig,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Class provider
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },

    // Factory provider
    {
      provide: 'CONFIG',
      useFactory: () => {
        return process.env.NODE_ENV === 'development' ? devConfig : proConfig
      }
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs') // ! Option: 1
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'songs', method: RequestMethod.POST }) // ! Option: 2
    consumer.apply(LoggerMiddleware).forRoutes(SongsController) // ! Option: 3
  }
}
