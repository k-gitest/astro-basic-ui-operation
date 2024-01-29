/** @jsxImportSource solid-js */
import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { SolidTextField } from "./SolidTextField.tsx";

export const Form: Component = () => {
  const [inputText, setInputText] = createSignal<string>("");
  const handleChange = (event: Event): void => {
    setInputText((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <SolidTextField text={inputText()} onInput={handleChange} />
      <p>{inputText}</p>
    </>
  );
};
