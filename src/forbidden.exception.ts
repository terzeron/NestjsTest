import {HttpException, HttpStatus} from '@nestjs/common';

// 커스텀 예외
export class ForbiddenException extends HttpException {
    constructor() {
        super('Forbidden', HttpStatus.FORBIDDEN);
    }
}
