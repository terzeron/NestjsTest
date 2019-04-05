import { Controller, Get, Req, Post, HttpCode, Header, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat';
    }
    // curl -v -X POST http://localhost:3000/cats

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    // curl http://localhost:3000/cats

    @Get('ab*cd')
    findAllWithWildCard() {
        return 'This route uses a wildcard';
    }
    // curl http://localhost:3000/cats/ab111cd

    @Get(':id')
    findOne(@Param('id') id): string {
        console.log(id);
        return `This actions returns a # ${id} cat`;
    }
    // curl http://localhost:3000/cats/400
    
    @Get('p/:id')
    findOneWithParams(@Param() params): string {
        console.log(params.id);
        return `This actions returns a # ${params.id} cat`;
    }
    // curl http://localhost:3000/cats/p/500
}
