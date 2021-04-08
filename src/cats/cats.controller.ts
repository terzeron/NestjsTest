import {Controller, Get, Req, Post, Body, HttpCode, HttpStatus, Header, Param, Redirect, Query, ParseIntPipe, UsePipes} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {Request, Response} from 'express';
import {ValidationPipe} from '../common/pipe/validation.pipe';
import {JoiValidationPipe} from '../common/pipe/joivalidation.pipe';
import {createCatSchema} from './create-cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Post()
    // 스키마에 기반한 validation, method-scoped pipe
    @UsePipes(new JoiValidationPipe(createCatSchema))
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    // curl -X POST -d '{name: "Meow", age: 10, breed: "Wildcat"}' http://localhost:3000/cats

    @Get('ab*cd')
    findAllWithWildCard() {
        return 'This route uses a wildcard';
    }
    // curl http://localhost:3000/cats/ab111cd

    @Get('naver')
    @Redirect('https://m.naver.com', 301)
    redirect(@Query('version') version) {
        if (version && version === '5') {
            return {url: 'https://m.naver.com/v5'};
        }
    }
    // curl http://localhost:3000/cats/naver/?version=5

    @Get()
    findAll(@Req() request: Request): Cat[] {
        return this.catsService.findAll();
    }
    // curl http://localhost:3000/cats

    @Get(':id')
    // findOne(@Param('id', ParseIntPipe) id: number): string {
    // findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number): string {
    findOne(@Param('id', ValidationPipe) id: number): string {
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
