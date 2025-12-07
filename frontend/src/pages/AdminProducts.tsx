import ProductCard from "../components/ProductCard/ProductCard";
import { useProduct } from "../contexts/ProductContext/useProduct";

const AdminProducts = () => {
  const { products } = useProduct();

  return (
    <>
      <div className="container mt-4">
        <div className="row g-4">
          {products.map((p) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={p.id}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
