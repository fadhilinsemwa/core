// components/sidepanel-navigations/Apply.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Apply: React.FC = () => {
  const currentPath = usePathname();

  return (
    <li className="mt-2">
      <Link href="/applypages/apply-now" legacyBehavior>
        <a className={`block py-2 px-4 rounded ${currentPath === '/applypages/apply-now' ? 'bg-secondary' : 'hover:bg-secondary'}`}>
          Apply Now
        </a>
      </Link>
    </li>
  );
};

export default Apply;
