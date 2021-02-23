import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';

// nestjs의 middleware는 DI가 가능하도록 선언됨
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request...');
        next();
    }
}

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
}
