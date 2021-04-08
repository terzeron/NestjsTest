import {Module, Global} from '@nestjs/common';
import {DogsController} from './dogs.controller';
import {DogsService} from './dogs.service';

// shared module로 정의함. exports가 선언되어야 함
// import한 모듈을 다시 export할 수도 있음 (re-exporting)
// global하게 선언할 수도 있음
@Global()
@Module({
    controllers: [DogsController],
    providers: [DogsService],
    exports: [DogsService],
})
export class DogsModule {
    // dependency injection
    constructor(private dogsService: DogsService) {
    }
}
