import React from 'react';

const SaveButton = () => {
  const handleSave = () => {
    // Implement save functionality here
    console.log('Conversation saved');
  };

  return (
    <button
      onClick={handleSave}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200"
    >
      <i className="bi bi-save mr-2"></i>
      Save
    </button>
  );
};

export default SaveButton;
