import { useState, type FC } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useProduct } from "../../contexts/ProductContext/useProduct";
import { useCreateProduct } from "../../hooks/useCreateProduct";
import { Genres } from "../../types/genres";

interface newProductModalProps {
  show: boolean;
  onClose: () => void;
}

const NewProductModal: FC<newProductModalProps> = ({ show, onClose }) => {
  const { addProduct } = useProduct();
  const { createProduct } = useCreateProduct();

  const [form, setForm] = useState({
    productName: "",
    author: "",
    description: "",
    genre: "Fantasy",
    price: "",
    image: null as File | null,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFile = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    if (!allowed.includes(file.type)) {
      alert("Invalid file type. Only PNG, JPG, JPEG, WEBP.");
      return;
    }

    setForm((prev) => ({ ...prev, image: e.target.files?.[0] || null }));
  };

  const handleSubmit = async () => {
    const fd = new FormData();

    fd.append("productName", form.productName);
    fd.append("author", form.author);
    fd.append("description", form.description);
    fd.append("genre", form.genre);
    fd.append("price", form.price);
    if (form.image) fd.append("image", form.image);

    try {
      const res = await createProduct(fd);

      if (res === null) {
        onClose();
        return;
      }

      addProduct(res);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    }
  };

  return (
    <Modal show={show} onHide={onClose} scrollable centered backdrop="static" style={{ marginTop: "30px"}}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control name="productName" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Select name="genre" onChange={handleChange}>
              {Object.values(Genres).map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              onChange={handleChange}
              pattern="[0-9]+([,\.][0-9]+)?"
              min={0}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" onChange={handleFile} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Create Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewProductModal;
