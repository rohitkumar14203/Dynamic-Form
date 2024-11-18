import { useForm } from "react-hook-form";

const FormGenerator = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!schema) return <p>No schema provided.</p>;

  // Async function to copy the JSON schema to the clipboard
  const copyToClipboard = async () => {
    try {
      const jsonString = JSON.stringify(schema, null, 2); // Prettified JSON
      await navigator.clipboard.writeText(jsonString); // Wait for the clipboard to update
      alert("Form JSON copied to clipboard!"); // Show success message
    } catch (error) {
      console.error("Failed to copy JSON: ", error); // Handle error
      alert("Failed to copy JSON: " + error.message); // Show error message to the user
    }
  };
  const downloadJSON = (data) => {
    const jsonString = JSON.stringify(data, null, 2); // Prettified JSON
    const blob = new Blob([jsonString], { type: "application/json" }); // Create a Blob from the JSON data
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob); // Create a download link for the Blob
    link.download = "form_submission.json"; // Specify the filename for the download
    link.click(); // Trigger the download
  };

  const removeNonSerializableData = (data) => {
    // Create a shallow copy of the schema or form data to avoid modifying the original
    const safeData = { ...data };

    // Remove any non-serializable parts (e.g., React components, functions, or DOM references)
    if (safeData.__reactFiber$w2roxbr4f5)
      delete safeData.__reactFiber$w2roxbr4f5;
    if (safeData.stateNode) delete safeData.stateNode;
    // Add more exclusions as necessary, e.g., functions, DOM elements, event handlers, etc.

    // Return the filtered object that is now safe to serialize
    return safeData;
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Button to copy the form schema JSON */}
      <button
        onClick={copyToClipboard}
        className="bg-gray-500 mx-1  text-white p-2 rounded-md"
      >
        Copy Form JSON
      </button>
      <button
        onClick={() => {
          const safeData = removeNonSerializableData(schema);
          downloadJSON(safeData);
        }}
        className="bg-green-500 text-white p-2 mx-1 rounded-md"
      >
        Download JSON
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
        <p className="mb-4">{schema.formDescription}</p>

        {/* Dynamically render the form fields based on the schema */}
        {schema.fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label>{field.label}</label>

            {/* Render the input fields based on field type */}
            {field.type === "text" || field.type === "email" ? (
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="border p-2 rounded-md"
              />
            ) : field.type === "textarea" ? (
              <textarea
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="border p-2 rounded-md"
              />
            ) : field.type === "select" ? (
              <select
                {...register(field.id, { required: field.required })}
                className="border p-2 rounded-md"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              field.options.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                  />
                  {option.label}
                </label>
              ))
            ) : null}

            {/* Show validation error if any */}
            {errors[field.id] && (
              <p className="text-red-500 mt-1">This field is required</p>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
