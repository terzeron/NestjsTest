import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DogsController} from './dogs/dogs.controller';
import {BeesController} from './bees/bees.controller';
// cats.module로 대체됨
// import {CatsController} from './cats/cats.controller';
// import {CatsService} from './cats/cats.service';
import {CatsModule} from './cats/cats.module';
import {DatabaseModule} from './database/database.module';
import {User} from './users/entities/user.entity';
import {LoggerMiddleware} from './common/middleware/logger.middleware';

@Module({
    imports: [CatsModule, DatabaseModule.forRoot([User])],
    exports: [DatabaseModule],
    controllers: [AppController/*, CatsController*/, DogsController, BeesController],
    providers: [AppService/*, CatsService*/],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            // LoggerMiddleware 주입
            .apply(LoggerMiddleware)
            // .apply(logger)로 바꿔 쓸 수도 있음
            // .apply(cors(), helmet(), logger)로 다중 지정 가능함
            // main.ts에서 생성된 app에서 미들웨어를 지정할 수도 있음
            //  app.use(logger);
            .forRoutes('cats');

            // 라우트 설정
            // ex) .forRoutes({path: 'ab*cd', method: RequestMethod.ALL})
            // ex) .forRoutes(CastController)
            // ex) .exclude(
            //         { path: 'cats', method: RequestMethod.GET },
            //         { path: 'cats', method: RequestMethod.POST },
            //         'cats/(.*)',
            //     )
            //     .forRoutes(CatsController)
    }
}
