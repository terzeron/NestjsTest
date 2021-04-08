import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import {validate} from 'class-validator';
import {plainToClass} from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    // 비동기식 파이프 지원함
    async transform(value: any, {metatype}: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        // value를 metatype 타입의 객체로 변환하여 validation
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }

    // tslint:disable-next-line:ban-types
    private toValidate(metatype: Function): boolean {
        // tslint:disable-next-line:ban-types
        const types: Function[] = [String, Boolean, Number, Array, Object];
        // metatype이 String, Boolean, Number, Array, Object와 같은
        // 기본 Javascript 타입인 경우 스키마를 가지고 validation할 수 없으므로 false를 반환
        return !types.includes(metatype);
    }
}
