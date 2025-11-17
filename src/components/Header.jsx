import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from "react-router-dom";
import i18n from 'i18next';
import { LogOut, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { t } = useTranslation();
  const { user } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------------------------
  // 🌙 DARK THEME FIX
  // ---------------------------
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
     window.matchMedia("(prefers-color-scheme: dark)").matches)

  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // ------------------------------

  const changeLang = (lng) => i18n.changeLanguage(lng);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="font-bold text-black dark:text-white ml-12">
          {t('welcome')}, <span className="text-blue-600">{user?.role?.toUpperCase()}</span>
        </h1>

        <div className=" bg-gray-200 text-black  dark:text-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          Role: <span className={user?.role === 'admin' ? 'text-green-600' : 'text-blue-600'}>
            {user?.role?.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* THEME TOGGLE FIXED */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-black dark:text-white"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <select
          onChange={(e) => changeLang(e.target.value)}
          value={i18n.language}
          className="p-2 bg-green-500 hover:bg-green-600 rounded text-sm text-white dark:text-white"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600  px-3 py-2 rounded transition"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">{t('logout')}</span>
        </button>
      </div>
    </header>
  );
}
