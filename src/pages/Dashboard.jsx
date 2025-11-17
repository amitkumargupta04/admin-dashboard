import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  const localStorageTheme = localStorage.getItem("theme");

  return (
    <div className='py-10 px-4 md:px-6 lg:px-8'>
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">{t('dashboard')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
        <div className="bg-gray-900 p-6 rounded-lg  text-white">
          <h3 className="text-lg">Total Products</h3>
          <p className="text-3xl font-bold">100</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg  text-white">
          <h3 className="text-lg">Total Users</h3>
          <p className="text-3xl font-bold">50</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg  text-white">
          <h3 className="text-lg">Revenue</h3>
          <p className="text-3xl font-bold">₹50,000</p>
        </div>
      </div>
    </div>
  );
}