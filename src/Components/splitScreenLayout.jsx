const SplitScreenLayout = ({ left, right }) => {
  return (
    <>
      {/* Main Title and Description */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-600">
          Dynamic Form Generator
        </h1>
        <p className="text-m font-semibold text-gray-500 mt-4">
          You can create or add your own JSON schema below. The default schema
          is for a simple user form with Name and Email. Modify it as needed.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full md:w-1/2 p-4 overflow-auto border-r border-t border-gray-300">
          {left}
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-auto border-t border-gray-300">
          {right}
        </div>
      </div>
    </>
  );
};

export default SplitScreenLayout;
