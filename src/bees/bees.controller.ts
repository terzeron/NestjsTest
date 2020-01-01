import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('bees')
export class BeesController {
    @Get()
    findAll(): Observable<any[]> { // Rx Observable을 반환 
        return of([]);
    }
}
