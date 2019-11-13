import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { BeesController } from './bees/bees.controller';
import { CatsService } from './cats/cats.service';

@Module({
    imports: [],
    controllers: [AppController, CatsController, DogsController, BeesController],
    providers: [AppService, CatsService],
})
export class AppModule {}
