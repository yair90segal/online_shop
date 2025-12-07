import ProductCard from "../components/ProductCard/ProductCard";
import type { ProductDetails } from "../types/productDetails";
import { useProduct } from "../contexts/ProductContext/useProduct";
import { useCart } from "../contexts/CartContext/useCart";

const SearchResults = () => {
  const { filteredProducts } = useProduct();
  const { addItem } = useCart();

  return (
    <div>
      {filteredProducts.map((product: ProductDetails) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addItem}
          btnLabel={"Add to Cart"}
        />
      ))}
    </div>
  );
};

export default SearchResults;
