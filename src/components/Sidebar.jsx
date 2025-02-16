import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

const Sidebar = ({ isOpen }) => {
  const [conversations, setConversations] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search functionality here
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Smart Conversation Manager</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-4">
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              Conversations
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              Tags
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {conversations.length === 0 ? (
                <p className="text-gray-500">No saved conversations yet.</p>
              ) : (
                <ul>
                  {conversations.map((conversation, index) => (
                    <li key={index} className="mb-2">
                      {/* Implement conversation item */}
                    </li>
                  ))}
                </ul>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {tags.length === 0 ? (
                <p className="text-gray-500">No tags created yet.</p>
              ) : (
                <ul>
                  {tags.map((tag, index) => (
                    <li key={index} className="mb-2">
                      {/* Implement tag item */}
                    </li>
                  ))}
                </ul>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Sidebar;
