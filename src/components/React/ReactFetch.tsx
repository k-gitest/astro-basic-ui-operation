import React, { useEffect, useState } from "react";
import "./ReactCard.css";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ReactFetch = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul role="list" className="link-card-grid">
      {posts.map((post) => (
        <li key={post.id} className="link-card">
          <a href="">
            <h2>
              {post.title}
              <span>&rarr;</span>
            </h2>
            <p>{post.body}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ReactFetch;
