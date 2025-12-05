import type { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import type { ProductDetails } from "../../types/productDetails";
import { useCart } from "../../contexts/CartContext/useCart";

interface ProductCardProps {
  product: ProductDetails;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <Card
      id={product.id}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 450,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 300,
          objectFit: "contain",
          bgcolor: "white",
        }}
        image={product.cloudinaryUrl}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {product.productName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.author}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {product.genre}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <div className="mt-auto"></div>
      <CardActions sx={{
        display: "flex",
        alignItems: "center",
      }}>
        <Box
          component="div"
          sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
            fontWeight: 500,
            fontSize: "0.875rem",
            border: "none",
            color: "primary.main",
            bgcolor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // force same height as the MUI button
            lineHeight: 1.75,
          }}
        >
          ${product.price}
        </Box>
        <Button size="small" variant="contained" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
