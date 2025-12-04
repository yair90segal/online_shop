import ProductCard from "../components/ProductCard/ProductCard";
import type { ProductDetails } from "../types/productDetails";
import { useProduct } from "../contexts/ProductContext/useProduct";

const SearchResults = () => {
  const { filteredProducts } = useProduct();

  return (
    <div>
      {filteredProducts.map((product: ProductDetails) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
