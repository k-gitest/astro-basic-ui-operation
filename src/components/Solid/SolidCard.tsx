/** @jsxImportSource solid-js */
import type { Component } from "solid-js";
import "./LinkCard.css";

type Props = {
  title: string;
  body: string;
};

export const SolidCard: Component<Props> = (props) => {
  return (
    <li class="link-card">
      <a href="">
        <h2>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  );
};
