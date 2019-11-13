import { Controller, Get, Req, Post, HttpCode, Header, Param, Query, Put, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none') // 응답 헤더
    @HttpCode(204) // 응답 상태 코드
    create(): string {
        return 'This action adds a new cat (no action really)';
    }
    // curl -v -X POST http://localhost:3000/cats 

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    // curl http://localhost:3000/cats

    @Get()
    findAll2(@Query() query) {
        return 'This action returns all cats (limit: ${query.limit} items)';
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
        return 'This action updates a #${id} cat';
    }

    @Get('ab*cd')
    findAllWithWildCard() {
        return 'This route uses a wildcard';
    }
    // curl http://localhost:3000/cats/ab111cd

    @Get(':id')
    findOne(@Param('id') id): string { // 단일 변수에 바인딩
        console.log(id);
        return `This actions returns a #${id} cat`;
    }
    // curl http://localhost:3000/cats/400
    
    @Get('p/:id')
    findOneWithParams(@Param() params): string { // 객체 속성으로 바인딩
        console.log(params.id);
        return `This actions returns a #${params.id} cat`;
    }
    // curl http://localhost:3000/cats/p/500
}
