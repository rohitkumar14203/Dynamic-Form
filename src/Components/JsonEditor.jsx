import React, { useState } from "react";

const JsonEditor = ({ schema, setSchema }) => {
  const [error, setError] = useState(null);

  const handleInputChange = (value) => {
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed);
      setError(null);
    } catch {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-96 border-2 outline-none p-2"
        defaultValue={JSON.stringify(schema, null, 2)}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JsonEditor;
