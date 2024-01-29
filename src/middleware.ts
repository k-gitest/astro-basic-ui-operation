import { defineMiddleware } from "astro:middleware";

// `context`と`next`は自動的に型付けされます
export const onRequest = defineMiddleware((context, next) => {
  // レスポンスデータをリクエストからインターセプトします
  // 必要に応じて、`locals`を改変してレスポンスを加工します
  //context.locals.title = "新しいタイトル";

  // Responseか`next()`の結果を返します
  return next();
});
