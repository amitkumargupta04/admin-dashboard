import { useEffect, useState } from "react";
import { useGetProductsQuery, useDeleteProductMutation } from "../services/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { MdDeleteOutline, MdOutlinePreview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export default function Products() {
  const { t } = useTranslation();
  const { user } = useSelector((s) => s.auth);
  const { data: products = [], isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    setLocalProducts(products.slice(0, 12));
  }, [products]);

  if (isLoading) return <p>{t("loading")}</p>;

  return (
    <div className="py-4 px-4 sm:px-4 md:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold dark:text-white text-black">{t("products")}</h1>
        {user?.role === "admin" && (
          <Link
            to="/products/create"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[5px]"
          >
            {t("create_product")}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localProducts.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 text-white p-6 rounded-[8px] shadow-lg opacity-95 hover:opacity-100 transition-opacity"
          >
            <h3 className="font-semibold text-lg mb-2">
              {p.title.substring(0, 30)}...
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {p.body.substring(0, 80)}...
            </p>

            <div className="flex gap-2 items-center">
              <Link
                to={`/products/${p.id}`}
                className="text-white"
              >
                <MdOutlinePreview size={24} />
              </Link>

              {user?.role === "admin" && (
                <>
                  <Link
                    to={`/products/${p.id}/edit`}
                    className="text-white "
                  >
                    <FaEdit size={24}/>
                  </Link>

                  <button
                    onClick={() => {
                      deleteProduct(p.id);
                      setLocalProducts(localProducts.filter((item) => item.id !== p.id));
                      toast.success("Product deleted successfully!");
                    }}
                    className="text-white hover:text-red-500 "
                    
                  >
                    
                    <MdDeleteOutline size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
