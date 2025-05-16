import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <nav className="flex flex-col h-full space-y-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <NavLinks />
    </nav>
  );
}
