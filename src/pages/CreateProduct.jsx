import { useCreateProductMutation } from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function CreateProduct() {
  const { t } = useTranslation();
  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };
    await createProduct(data);
    toast.success('Product created!');
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">{t('create_product')}</h1>
      <input name="title" placeholder="Title" required className="w-full p-3 border mb-4 rounded " />
      <textarea name="body" placeholder="Description" required className="w-full p-3 border mb-4 rounded  h-32" />
      <button type="submit" className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded">{t('create_product')}</button>
    </form>
  );
}