import {Module} from '@nestjs/common';
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

@Module({
    imports: [CatsModule, DatabaseModule.forRoot([User])],
    exports: [DatabaseModule],
    controllers: [AppController/*, CatsController*/, DogsController, BeesController],
    providers: [AppService/*, CatsService*/],
})
export class AppModule {
}
