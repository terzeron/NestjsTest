import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('bees')
export class BeesController {
    @Get()
    findAll(): Observable<any[]> {
        return of([]);
    }
}
