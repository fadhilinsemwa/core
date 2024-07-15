// components/SidePanel.tsx
'use client';

import React, { useState } from 'react';
import DashboardLink from './sidepanel-navigations/DashboardLink';
import EligibilityLinks from './sidepanel-navigations/EligibilityLinks';
import TcuLinks from './sidepanel-navigations/TcuLinks';
import Apply from './sidepanel-navigations/Apply';
import SomaLink from './sidepanel-navigations/SomaLink';

const SidePanel: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const togglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`bg-primary text-white flex flex-col justify-between ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen hidden md:flex`}>
      {!isCollapsed && (
        <>
          <div>
            <div className="p-4 font-heading text-2xl">Mwanza University</div>
            <ul className="space-y-2 p-4">
              <DashboardLink />
              <Apply /> {/* Apply Now button placed here */}
              <EligibilityLinks />
              <SomaLink /> {/* Soma Link button placed here */}
              <TcuLinks />
            </ul>
          </div>
        </>
      )}
      <button 
        onClick={togglePanel} 
        className={`p-2 m-4 rounded ${isCollapsed ? 'bg-secondary' : 'bg-secondary-light'} hover:bg-secondary-dark transition duration-300 self-end mt-auto`}
      >
        {isCollapsed ? '>' : '<'}
      </button>
    </nav>
  );
};

export default SidePanel;
