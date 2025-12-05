import type { FC } from "react";
import { Trash } from "react-bootstrap-icons";
import type { ProductDetails } from "../../types/productDetails";
import { useCart } from "../../contexts/CartContext/useCart";

interface CartItemProps {
  product: ProductDetails;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ product, quantity }) => {
  const { cartItems, setCartItems, addItem, removeItem } = useCart();

  const onRemove = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.item.id !== productId));
  };

  return (
    <div className="d-flex border rounded p-3 align-items-stretch">

      {/* IMAGE */}
      <img
        src={product.cloudinaryUrl}
        alt={product.productName}
        className="me-3"
        style={{
          height: "150px",
          width: "110px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* MIDDLE SECTION */}
      <div className="flex-grow-1 d-flex flex-column justify-content-between">
        <div>
          <div className="fw-bold fs-5">{product.productName}</div>
          <div className="text-muted">{product.author}</div>
          <div className="text-muted">{product.genre}</div>
          <div className="mt-2 fw-semibold fs-6">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="d-flex flex-column justify-content-between align-items-end">

        {/* DELETE ICON */}
        <Trash
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => onRemove(product.id)}
        />

        {/* QUANTITY BAR */}
        <div className="d-flex align-items-center border rounded px-2 py-1 mt-3">
          <button
            className="btn btn-sm btn-light"
            style={{ fontWeight: "bold" }}
            onClick={() => removeItem(product)}
          >
            −
          </button>

          <div
            className="mx-2 text-center"
            style={{
              backgroundColor: "var(--bs-primary)",
              color: "white",
              padding: "4px 16px",
              fontWeight: 500,
              borderRadius: "6px",
              minWidth: "36px",
            }}
          >
            {quantity}
          </div>

          <button
            className="btn btn-sm btn-light"
            style={{ fontWeight: "bold" }}
            onClick={() => addItem(product)}
          >
            +
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
