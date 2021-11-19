import React from "react";

export default function Button(props) {
  const { children } = props;
  
  return (
    <button
      data-testid="button"
      className="px-4 py-2 rounded text-xs bg-blue-500 hover:bg-blue-600 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
