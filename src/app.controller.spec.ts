import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return array of JSON string of HTML Texts', async () => {
      const expectedFiveValues = '[{Irure consequat magna adipisicing est ullamco nostrud culpa qui.}, {Irure consequat magna adipisicing est ullamco nostrud culpa qui.}, {Irure consequat magna adipisicing est ullamco nostrud culpa qui.}, {Irure consequat magna adipisicing est ullamco nostrud culpa qui.}, {Irure consequat magna adipisicing est ullamco nostrud culpa qui.}]';
      const expectedOneValue = '[{Irure consequat magna adipisicing est ullamco nostrud culpa qui.}]';

      const mockedFunction = jest.spyOn(appService, 'getPosts');
      mockedFunction.mockResolvedValueOnce(expectedFiveValues);
      mockedFunction.mockResolvedValueOnce(expectedOneValue);

      expect(await appController.getPosts(5)).toBe(expectedFiveValues);
      expect(await appController.getPosts(1)).toBe(expectedOneValue);
      mockedFunction.mockRestore();
    });
  });
});
