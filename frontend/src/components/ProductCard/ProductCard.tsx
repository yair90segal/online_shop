import type { FC } from "react";

interface ProductCardProps {
    imageUrl: string;
}

const ProductCard: FC<ProductCardProps> = ({ imageUrl }) => {
    return (
        <>
            {console.log(imageUrl)};
        </>
    )
}

export default ProductCard;