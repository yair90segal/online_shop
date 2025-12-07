import { useState, type FC } from "react";
import { Modal, Button } from "react-bootstrap";
import type { orderType } from "../../types/orderType";

interface orderProps {
    order: orderType;
}

const Order: FC<orderProps> = ({ order }) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between p-3 border rounded mb-3"
        style={{ width: "100%" }}
      >
        <div className="d-flex flex-wrap align-items-center gap-4">
          <span style={{ textDecoration: "underline" }}>
            <strong>{order.id}</strong>
          </span>

          <span>{new Date(order.orderDate).toLocaleString()}</span>

          <span className="badge bg-secondary">{order.status}</span>

          <Button
            size="sm"
            variant="primary"
            className="ms-2"
            onClick={openModal}
          >
            View Items
          </Button>
        </div>

        <div>
          <strong>Total: ${order.totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <Modal show={show} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {order.items.map((item, index) => (
            <div key={index} className="d-flex align-items-center mb-3">
              <img
                src={item.imageUrl}
                alt={item.productName}
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "6px"
                }}
              />

              <div className="ms-3 flex-grow-1">
                <div><strong>{item.productName}</strong></div>
                <div className="text-muted">{item.author}</div>
              </div>

              <div className="text-end">
                <span className="fw-bold">Qty: {item.quantity}</span>
              </div>
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
