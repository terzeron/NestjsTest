import { Test, TestingModule } from '@nestjs/testing';
import { BeesController } from './bees.controller';

describe('Bees Controller', () => {
    let controller: BeesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BeesController],
        }).compile();

        controller = module.get<BeesController>(BeesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
