// components/sidepanel-navigations/DashboardLink.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLink: React.FC = () => {
  const currentPath = usePathname();

  return (
    <li>
      <Link href="/dashboard" legacyBehavior>
        <a className={`block py-2 px-4 rounded ${currentPath === '/dashboard' ? 'bg-secondary' : 'hover:bg-secondary'}`}>
          Dashboard
        </a>
      </Link>
    </li>
  );
};

export default DashboardLink;
