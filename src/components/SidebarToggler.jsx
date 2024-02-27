import React, { useState } from 'react';
// import { MenuIcon } from '@heroicons/react/24/solid'; // Імпорт іконки меню

const SidebarToggler = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Кнопка з іконкою */}
      <button onClick={toggleSidebar}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>

      </button>
      {isSidebarOpen && (
        <div style={{ width: '200px', height: '100vh', background: '#eee', position: 'fixed', top: 0, left: 0 }}>
          {children}
        </div>
      )}
      <div style={{ marginLeft: isSidebarOpen ? '200px' : '0', transition: 'margin 0.3s ease' }}>
        {/* Content where the sidebar will push */}
      </div>
    </div>
  );
};

export default SidebarToggler;
