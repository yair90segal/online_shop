import ProductCard from "../components/ProductCard/ProductCard";
import { useCart } from "../contexts/CartContext/useCart";
import { useProduct } from "../contexts/ProductContext/useProduct";

const Home = () => {
  const { products } = useProduct();
  const { addItem } = useCart();

  return (
    <>
      <div className="container mt-4">
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard
                product={p}
                onAddToCart={addItem}
                btnLabel={"Add to Cart"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
