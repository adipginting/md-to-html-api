import { Test, TestingModule } from '@nestjs/testing';
import { Context, MockContext, createMockContext } from './context';
import { AppService } from './app.service';
import { Post } from '@prisma/client';
import { uuidv7 } from 'uuidv7';

describe('AppController', () => {
  let appService: AppService;
  let context: Context;
  let mockContext: MockContext;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    mockContext = createMockContext();
    context = mockContext as unknown as Context;
  });

  describe('root', () => {
    const uuid = uuidv7();
    it('should return array of JSON string of HTML Texts', async () => {
      const post: Post = {
        id: uuid,
        post: 'Ad non esse nostrud aute sint. Incididunt magna minim excepteur exercitation pariatur elit laborum ad minim. Incididunt ut tempor reprehenderit ullamco veniam consectetur in nostrud nulla consequat laboris. Elit eu consectetur exercitation ullamco nisi minim esse. Qui elit dolore in Lorem aliqua laboris amet tempor sint ad voluptate. Dolore cillum tempor quis aliqua laborum excepteur amet anim pariatur pariatur qui anim non. Fugiat eiusmod incididunt amet dolore duis eu anim cillum ad reprehenderit sint cupidatat dolor.Dolore est ad aute cupidatat elit commodo ad exercitation duis proident enim veniam enim irure.Enim exercitation id est et veniam magna eiusmod fugiat.Duis tempor eiusmod adipisicing et dolor anim.Labore esse reprehenderit minim voluptate.Duis excepteur deserunt reprehenderit magna eiusmod. Deserunt cupidatat elit consequat culpa Lorem duis consectetur sunt do.Tempor elit ipsum eiusmod velit ut minim exercitation fugiat incididunt.Aliqua ullamco quis enim sint Lorem in.Consequat magna cupidatat aliquip aute adipisicing adipisicing non.Minim occaecat ipsum ullamco magna amet sint.Irure esse sit voluptate aliquip ad.Duis ad laboris cupidatat ad non veniam excepteur irure exercitation elit aute.Consequat ullamco adipisicing anim non ex.Veniam ex do nostrud id reprehenderit est qui amet velit cupidatat.Consectetur elit ex nulla mollit voluptate Lorem enim.',
      };
      mockContext.prisma.post.create.mockResolvedValue(post);
      await expect(appService.createPost(post, context)).resolves.toEqual({
        id: uuid,
        post: 'Ad non esse nostrud aute sint. Incididunt magna minim excepteur exercitation pariatur elit laborum ad minim. Incididunt ut tempor reprehenderit ullamco veniam consectetur in nostrud nulla consequat laboris. Elit eu consectetur exercitation ullamco nisi minim esse. Qui elit dolore in Lorem aliqua laboris amet tempor sint ad voluptate. Dolore cillum tempor quis aliqua laborum excepteur amet anim pariatur pariatur qui anim non. Fugiat eiusmod incididunt amet dolore duis eu anim cillum ad reprehenderit sint cupidatat dolor.Dolore est ad aute cupidatat elit commodo ad exercitation duis proident enim veniam enim irure.Enim exercitation id est et veniam magna eiusmod fugiat.Duis tempor eiusmod adipisicing et dolor anim.Labore esse reprehenderit minim voluptate.Duis excepteur deserunt reprehenderit magna eiusmod. Deserunt cupidatat elit consequat culpa Lorem duis consectetur sunt do.Tempor elit ipsum eiusmod velit ut minim exercitation fugiat incididunt.Aliqua ullamco quis enim sint Lorem in.Consequat magna cupidatat aliquip aute adipisicing adipisicing non.Minim occaecat ipsum ullamco magna amet sint.Irure esse sit voluptate aliquip ad.Duis ad laboris cupidatat ad non veniam excepteur irure exercitation elit aute.Consequat ullamco adipisicing anim non ex.Veniam ex do nostrud id reprehenderit est qui amet velit cupidatat.Consectetur elit ex nulla mollit voluptate Lorem enim.',
      });
    });
  });
});
