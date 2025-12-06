import CartItem from "../components/CartItem/CartItem";
import { useCart } from "../contexts/CartContext/useCart";
import { usePlaceOrder } from "../hooks/usePlaceOrder";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const { placeOrder } = usePlaceOrder();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;

    const orderItems = cartItems.map((c) => ({
      productId: c.item.id,
      quantity: c.quantity,
    }));

    const placedOrder = await placeOrder(orderItems);

    if (placedOrder) {
      setCartItems([]);
      alert("Order place successfully");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {cartItems.map((cartItem, index) => (
        <div key={cartItem.item.id} className="w-75 mb-4">
          <CartItem product={cartItem.item} quantity={cartItem.quantity} />

          {index < cartItems.length - 1 && <hr className="my-4 w-100" />}
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="w-75 mt-4 p-3 border rounded d-flex justify-content-between align-items-center">
          <h4 className="m-0">Total: ${totalPrice.toFixed(2)}</h4>

          <button
            className="btn btn-primary px-4 py-2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
