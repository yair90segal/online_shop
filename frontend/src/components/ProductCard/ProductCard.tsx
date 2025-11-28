import type { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import type { ProductDetails } from "../../types/productDetails";

interface ProductCardProps {
  product: ProductDetails
}

const ProductCard: FC<ProductCardProps> = ({
  product
}) => {
  return (
    <Card id={product.productId} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={product.imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {product.productName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.author}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {product.category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
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
          {product.price}
        </Box>
        <Button size="small" variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
