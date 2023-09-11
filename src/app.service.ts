import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { Context } from './context';

@Injectable()
export class AppService {
  async getPosts(noPosts: number): Promise<string> {
    return '';
  }

  async createPost(post: Post, context: Context): Promise<Post> {
    return context.prisma.post.create({
      data: post,
    });
  }
}
