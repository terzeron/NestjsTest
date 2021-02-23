import {Module} from '@nestjs/common';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';

// controller와 service를 합쳐서 feature module로 만듬
@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
