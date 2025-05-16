export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar with just static content */}
      <div className="w-64 bg-red-500 text-white p-4">
        <p>Hello from sidebar</p>
      </div>

      {/* Main content */}
      <main className="flex-1 bg-white p-8">
        {children}
      </main>
    </div>
  );
}
