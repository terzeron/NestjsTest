import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';

// 예외 필터
// 예외를 잡아서 별도로 (로깅?) 처리하는 것을 담당하는 필터
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}
