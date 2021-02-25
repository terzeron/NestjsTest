import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('bees')
export class BeesController {
    @Get()
    findAll(): Observable<any[]> { // Rx Observable을 반환 
        return of([]);
        // 예외 처리해야 하는 경우에
        //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // 또는 메시지와 상태값 지정
        //throw new HttpException({
        //    status: HttpStatus.FORBIDDEN,
        //    error: 'This is a custom message',
        //}, HttpStatus.FORBIDDEN);
        // 또는 커스텀 예외
        //throw new ForbiddenException();
    }
}
