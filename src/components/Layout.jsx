import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>

        {/* YE FOOTER ADD KAR DO (yahan sabse neeche) */}
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 Phantasm Solutions Pvt Ltd. All rights reserved. | 
          Made with <span className="text-red-500">❤️</span> by Amit Kumar Gupta
        </footer>
      </div>
    </div>
  );
}