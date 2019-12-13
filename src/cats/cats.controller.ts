import { Controller, Get, Req, Post, HttpCode, Header, Param, Redirect, Query } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    create(): string {
        return 'This action adds a new cat (no action really)';
    }
    // curl -v -X POST http://localhost:3000/cats 

    @Get('ab*cd')
    findAllWithWildCard() {
        return 'This route uses a wildcard';
    }
    // curl http://localhost:3000/cats/ab111cd

    @Get('naver')
    @Redirect('https://m.naver.com', 301)
    redirect(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://m.naver.com/v5' };
        }
    }
    // curl http://localhost:3000/cats/naver/?version=5
    
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    // curl http://localhost:3000/cats

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
