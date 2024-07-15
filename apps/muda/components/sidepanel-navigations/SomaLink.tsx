// components/sidepanel-navigations/SomaLink.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SomaLink: React.FC = () => {
  const currentPath = usePathname();

  return (
    <li className="mt-2">
      <Link href="/soma-pages/soma-link" legacyBehavior>
        <a className={`block py-2 px-4 rounded ${currentPath === '/soma-pages/soma-link' ? 'bg-secondary' : 'hover:bg-secondary'}`}>
          Soma
        </a>
      </Link>
    </li>
  );
};

export default SomaLink;
