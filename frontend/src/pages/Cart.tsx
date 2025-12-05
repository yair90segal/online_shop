import CartItem from "../components/CartItem/CartItem";
import { useCart } from "../contexts/CartContext/useCart";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {cartItems.map((cartItem, index) => (
        <div key={cartItem.item.id} className="w-75 mb-4">
          <CartItem
            product={cartItem.item}
            quantity={cartItem.quantity}
          />

          {index < cartItems.length - 1 && (
            <hr className="my-4 w-100" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
