import type { FC } from "react";
import { Categories } from "../../types/categories";
import Card, { type CardProps } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface ProductCardProps extends CardProps {
  imageUrl: string;
  productId: string;
  productName: string;
  author: string;
  category: Categories;
  description: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({
  imageUrl,
  productId,
  productName,
  author,
  category,
  description,
  price,
}) => {
  return (
    <Card id={productId} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {productName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
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
            cursor: "pointer",
            border: "1px solid", // so it looks button-like
            borderColor: "primary.main",
            color: "primary.main",
            bgcolor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // force same height as the MUI button
            lineHeight: 1.75,
          }}
        >
          {price}
        </Box>
        <Button size="small" variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
