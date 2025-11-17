import { useNavigate, useParams, Link } from "react-router-dom";
import { useGetProductQuery } from "../services/api";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);

  
  const { data: product, isLoading } = useGetProductQuery(id);

  
  if (isLoading) return <p>{t("loading")}</p>;
  if (!product) return <p>{t("no_data")}</p>;

  return (
    <div className="max-w-2xl mx-auto  bg-gray-900 text-white  rounded-[8px] shadow-lg  transition-opacity mt-10 px-4 md:px-6 lg:px-8 py-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-6">{product.body}</p>
      <p>Price: <span className="text-green-400">$99.99</span></p>
      <p>Category: <span className="text-yellow-400">Electronics</span></p>
      <p>Stock: <span className="text-blue-400">50</span></p>

      {user?.role === "admin" && (
        <div className="flex gap-4">
          <Link
            to={`/products/${id}/edit`}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {t("edit")}
          </Link>
        </div>
      )}

      <button
        className="bg-green-400 text-black px-6 py-2 mt-4 rounded-sm hover:bg-green-600"
        onClick={() => navigate("/products")}
      >
        Back
      </button>
    </div>
  );
}
