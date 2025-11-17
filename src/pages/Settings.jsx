import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t } = useTranslation();
  return (
    <div className='bg-gray-900 text-white p-4'>
      <h1 className="text-3xl font-bold mb-6">{t('settings')}</h1>
      <p>Theme & Language toggles are in header.</p>
    </div>
  );
}