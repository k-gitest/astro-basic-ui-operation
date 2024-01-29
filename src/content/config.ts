// 1. ユーティリティを`astro:content`からインポート
import { z, defineCollection } from 'astro:content';

// 2. 各コレクションに`type`と`schema`を定義
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string())
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  'blog': blogCollection,
};