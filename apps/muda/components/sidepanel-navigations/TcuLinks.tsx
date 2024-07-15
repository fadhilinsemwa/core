// components/sidepanel-navigations/TcuLinks.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tcuNavItems: { name: string; path: string }[] = [
  { name: 'Check Applicant Status', path: 'check-applicant-status' },
  { name: 'Add Applicant', path: 'add-applicant' },
  { name: 'Submit Applicant Programme Choices', path: 'submit-applicant-programme-choices' },
  { name: 'Confirm Applicant Admission', path: 'confirm-applicant-admission' },
  { name: 'Unconfirm Applicant Admission', path: 'unconfirm-applicant-admission' },
  { name: 'Resubmit rectified applicants', path: 'resubmit-rectified-applicants' },
  { name: 'Populate Dashboard', path: 'populate-dashboard' },
  { name: 'Get applicant Status', path: 'get-applicant-status' },
  { name: 'Get programmes with Admitted candidates', path: 'get-programmes-with-admitted-candidates' },
  { name: 'Get admitted/verified applicants', path: 'get-admitted-verified-applicants' },
  { name: 'Get a list of confirmed applicants (multiple selection Only)', path: 'get-list-confirmed-applicants' },
  { name: 'Send sms to Applicants', path: 'send-sms-applicants' },
  { name: 'Cancel/reject admission', path: 'cancel-reject-admission' },
  { name: 'Request confirmation code', path: 'request-confirmation-code' },
  { name: 'Internal Transfers', path: 'internal-transfers' },
  { name: 'Inter-institutional transfers', path: 'inter-institutional-transfers' },
  { name: 'Get applicants with multiple/single admission status', path: 'get-applicants-admission-status' },
  { name: 'Submit enrolled/registered students', path: 'submit-enrolled-registered-students' },
  { name: 'Submit Graduates', path: 'submit-graduates' },
  { name: 'Submit Institution Staff', path: 'submit-institution-staff' },
  { name: 'Get verification status for internally transferred students', path: 'get-verification-status-internal-transfers' },
  { name: 'Get verification status for inter-institutional transferred students', path: 'get-verification-status-inter-institutional-transfers' },
  { name: 'Submit students drop-outs', path: 'submit-students-drop-outs' },
  { name: 'Submit students who postponed studies', path: 'submit-students-postponed-studies' },
  { name: 'Submit admitted students into non-degree programmes (foundation, diploma, certificates)', path: 'submit-admitted-students-non-degree' },
  { name: 'Get verification status for non-degree admitted students', path: 'get-verification-status-non-degree' },
  { name: 'Submit applicants applied for Postgraduate programmes', path: 'submit-applicants-postgraduate' },
  { name: 'Submit admitted students into Postgraduate programmes', path: 'submit-admitted-students-postgraduate' },
  { name: 'Get verification status for admitted students into Postgraduate programmes', path: 'get-verification-status-postgraduate' },
  { name: 'Submit transferred students from one Postgraduate programme to another within the same institution or from one institution to another', path: 'submit-transferred-students-postgraduate' },
  { name: 'Get verification status for transferred students into Postgraduate programmes', path: 'get-verification-status-transferred-postgraduate' },
];

const TcuLinks: React.FC = () => {
  const [isTcuOpen, setIsTcuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <li>
      <button
        className={`w-full text-left py-2 px-4 rounded ${isTcuOpen ? 'bg-secondary' : 'hover:bg-secondary'}`}
        onClick={() => setIsTcuOpen(!isTcuOpen)}
      >
        TCU Endpoints
      </button>
      {isTcuOpen && (
        <ul className="pl-4 mt-2 space-y-2">
          {tcuNavItems.map(({ name, path }) => (
            <li key={path}>
              <Link href={`/tcupages/${path}`} legacyBehavior>
                <a className={`block py-2 px-4 rounded ${currentPath === `/tcupages/${path}` ? 'bg-secondary' : 'hover:bg-secondary'}`}>
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default TcuLinks;
