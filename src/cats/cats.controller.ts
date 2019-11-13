import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    // curl -X POST -d '{name: "Meow", age: 10, breed: "Wildcat"}' http://localhost:3000/cats

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    // curl http://localhost:3000/cats
}
