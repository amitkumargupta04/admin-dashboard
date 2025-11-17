import { useGetUsersQuery } from '../services/api';
import { useTranslation } from 'react-i18next';

export default function Users() {
  const { t } = useTranslation();
  const { data: users = [], isLoading } = useGetUsersQuery();

  if (isLoading) return <p>{t('loading')}</p>;

  return (
    <div className='py-10 px:4 md:px-6 lg:px-8'>
      <h1 className="text-3xl font-bold mb-6 dark:text-white text-black">{t('users')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.slice(0, 6).map(u => (
          <div key={u.id} className="bg-gray-900  p-4 rounded shadow">
            <p className="font-semibold text-white">Name: {u.name}</p>
            <p className="text-sm text-white">Email: {u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}