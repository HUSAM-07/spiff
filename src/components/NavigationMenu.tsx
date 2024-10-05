import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;