import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../store/authSlice";
import { Home, Package, Users, Settings, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();
  const { user } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);   // ← YEHI FIX KIYA
  const location = useLocation();

  const adminLinks = [
    { to: '/dashboard', label: t('dashboard'), icon: Home },
    { to: '/users', label: t('users'), icon: Users },
    { to: '/products', label: t('products'), icon: Package },
    { to: '/settings', label: t('settings'), icon: Settings },
  ];

  const userLinks = [
    { to: '/dashboard', label: t('dashboard'), icon: Home },
    { to: '/products', label: t('products'), icon: Package },
  ];

  const links = user?.role === 'admin' ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 transform transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative z-40 overflow-y-auto`}>
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 p-3 rounded transition ${location.pathname === link.to ? 'bg-green-600' : 'hover:bg-gray-800'}`}
            >
              <link.icon size={20} />
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => {
            dispatch(logout());
            setMobileOpen(false);
          }}
          className="flex items-center gap-3 p-3 mt-8 text-red-400 hover:bg-gray-800 w-full rounded"
        >
          <LogOut size={20} />
          {t('logout')}
        </button>
      </div>
    </>
  );
}