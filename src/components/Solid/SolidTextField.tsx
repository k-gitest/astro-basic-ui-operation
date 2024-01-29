/** @jsxImportSource solid-js */
import type { Component, JSX } from "solid-js";

type Props = {
  text: string;
  onInput: (event: Event) => void;
};

export const SolidTextField: Component<Props> = (props) => {
  return (
    <input
      type="text"
      value={props.text}
      onInput={props.onInput}
      placeholder="SolidTextField"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1"
    />
  );
};
