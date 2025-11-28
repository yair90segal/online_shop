import type { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
import type { ProductDetails } from "../../types/productDetails";

interface CardContainerProps {
  products: ProductDetails[];
}

export const CardContainer: FC<CardContainerProps> = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        py: 2,
        px: 1,
      }}
    >
      {products.map((product) => {
        const card: ProductDetails = {
          imageUrl: product.imageUrl,
          productId: product.productId,
          productName: product.productName,
          author: product.author,
          description: product.description,
          price: product.price,
          category: product.category,
        };

        return <ProductCard key={product.productId} product={card} />;
      })}
    </Box>
  );
};
