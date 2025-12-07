import { useState, type FC } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import type { orderType } from "../../types/orderType";

interface adminOrderProps {
    order: orderType;
}

const AdminOrder: FC<adminOrderProps> = ({ order }) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const onStatusChange = (orderId: string, newStatus: unknown) => {
    console.log(orderId);
    console.log(newStatus);
  };

  const handleStatusChange = (e: { target: { value: unknown; }; }) => {
    const newStatus = e.target.value;
    onStatusChange(order.id, newStatus);
  };

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

          <span>User: {order.userId}</span>

          <span>{new Date(order.orderDate).toLocaleString()}</span>

          <Form.Select
            size="sm"
            value={order.status}
            onChange={handleStatusChange}
            style={{ width: "150px" }}
          >
            <option value="pending">PENDING</option>
            <option value="completed">COMPLETED</option>
            <option value="cancelled">CANCELLED</option>
          </Form.Select>

          <Button size="sm" variant="primary" onClick={openModal}>
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

export default AdminOrder;
