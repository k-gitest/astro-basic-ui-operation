import type { User } from "../types/users.ts";
import type { Post } from "../types/posts.ts";

const getPosts = async (path: string | null): Promise<Post | Post[]> => {
  if (path) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${path}`,
    );
    const data: Post = await response.json();
    return data;
  } else {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data: Post[] = await response.json();
    return data;
  }
};

const getUsers = async (): Promise<User> => {
  const responseData = await fetch(
    "https://jsonplaceholder.typicode.com/users/",
  );
  const users: User[] = await responseData.json();
  return users;
};

export { getPosts, getUsers };
