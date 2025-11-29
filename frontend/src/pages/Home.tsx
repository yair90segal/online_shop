import { CardContainer } from "../components/CardContainer/CardContainer";
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
        <CardContainer products={[product, product, product, product, product, product,
             product, product, product, product, product, product]} />
    </>
  );
};

export default Home;
