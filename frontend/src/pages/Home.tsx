import ProductCard from "../components/ProductCard/ProductCard";
import { Categories } from "../types/categories";
import type { ProductDetails } from "../types/productDetails";

const Home = () => {
  const product: ProductDetails = {
    imageUrl: "../assets/react.svg",
    productId: "1",
    productName: "Test",
    author: "Me",
    description: "description",
    price: 15.99,
    category: Categories.BestSellers,
  };
  return (
    <>
      <ProductCard product={product} />
    </>
  );
};

export default Home;
