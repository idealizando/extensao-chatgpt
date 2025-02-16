import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SaveButton from './components/SaveButton';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
      >
        {isSidebarOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      <SaveButton />
    </div>
  );
};

export default App;
