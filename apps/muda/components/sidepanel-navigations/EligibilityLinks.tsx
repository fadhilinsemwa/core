// components/sidepanel-navigations/EligibilityLinks.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const EligibilityLinks: React.FC = () => {
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const currentPath = usePathname();

  const links = [
    { href: '/eligibilitypages/check', label: 'Check' },
    { href: '/eligibilitypages/change-core-subjects', label: 'Change Core Subjects' },
    { href: '/eligibilitypages/manage-courses', label: 'Manage Courses' },
    { href: '/eligibilitypages/current-courses', label: 'Current Courses' },
  ];

  return (
    <li>
      <button
        className={`w-full text-left py-2 px-4 rounded ${isEligibilityOpen ? 'bg-secondary' : 'hover:bg-secondary'}`}
        onClick={() => setIsEligibilityOpen(!isEligibilityOpen)}
      >
        Eligibility
      </button>
      {isEligibilityOpen && (
        <ul className="pl-4 mt-2 space-y-2">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a className={`block py-2 px-4 rounded ${currentPath === link.href ? 'bg-secondary' : 'hover:bg-secondary'}`}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default EligibilityLinks;
