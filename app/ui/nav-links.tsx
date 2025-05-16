'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Join a Club', href: '/dashboard/registration' },
  { name: 'Create a New Club', href: '/dashboard/application' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={clsx(
              'block rounded px-4 py-2 text-sm font-medium',
              pathname === link.href
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-blue-100'
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
