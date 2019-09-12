import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDogDto } from './create-dog.dto';

@Controller('dogs')
export class DogsController {
    @Post()
    async create(@Body() createDogDto: CreateDogDto) {
        return 'This action adds a new dog ' + JSON.stringify(createDogDto);
    }
    // curl -X POST -d '{name: "Bark", age: 10, breed: "Poodle" }' http://localhost:3000/dogs
    
    @Get()
    async findAll(): Promise<any[]> {
        return [1, 2, 3];
    }
    // curl http://localhost:3000/dogs
}
