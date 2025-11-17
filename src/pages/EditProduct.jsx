import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductQuery, useUpdateProductMutation } from '../services/api';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function EditProduct() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product } = useGetProductQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct({ id, title: e.target.title.value, body: e.target.body.value });
    toast.success('Updated!');
    navigate('/products');
  };

  if (!product) return <p>{t('loading')}</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <input name="title" defaultValue={product.title} className="w-full p-3 border mb-4 rounded dark:bg-gray-700" />
      <textarea name="body" defaultValue={product.body} className="w-full p-3 border mb-4 rounded dark:bg-gray-700 h-32" />
      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Update</button>
    </form>
  );
}