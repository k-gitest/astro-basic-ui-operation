/** @jsxImportSource react */
import React, { useState } from "react";
import type { ChangeEvent } from "react";
import ReactTextField from "./ReactTextField.tsx";

const ReactForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  return (
    <>
      <ReactTextField value={inputText} onChange={handleChange} />
      <p>{inputText}</p>
    </>
  );
};

export default ReactForm;
