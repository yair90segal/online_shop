import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import ProductCard from "../components/ProductCard/ProductCard";
import type { ProductDetails } from "../types/productDetails";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.trim() ?? "";
  const { products } = useProducts();
  // product need to be context
  // add result variable, reset to empty list. in the use effect we will assign value of filtered product list

  const results = useMemo(() => {
    if (!query) {
      return products;
    }

    return products.filter(
      (product) =>
        product.productName.toLowerCase().includes(query.toLowerCase()) ||
        product.author.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  return (
    <div>
      {results.map((product: ProductDetails) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
