import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ReactTextField: React.FC<Props> = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder="ReactTextField"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1"
    />
  );
};

export default ReactTextField;
