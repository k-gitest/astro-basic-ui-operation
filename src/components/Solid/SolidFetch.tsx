/** @jsxImportSource solid-js */
import type { Component } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";
import { SolidCard } from "./SolidCard.tsx";
import "./ListCss.css";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const SolidFetch: Component = () => {
  const [posts, setPosts] = createSignal<Posts[]>([]);
  const [loading, setLoading] = createSignal<boolean>(true);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  createEffect(() => {
    fetchUser();
    onCleanup(() => {
    });
  });

  return (
    <div>
      <h1>User Data:</h1>
      {loading() ? (
        <p>Loading...</p>
      ) : (
        <ul role="list" class="link-card-grid">
          {posts().map((post) => (
            <SolidCard title={post.title} body={post.body} key={post.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
