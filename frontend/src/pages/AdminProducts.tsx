import Button from "@mui/material/Button";
import { useProduct } from "../contexts/ProductContext/useProduct";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState } from "react";
import NewProductModal from "../components/NewProductModal/NewProductModal";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

const AdminProducts = () => {
  const { products, removeProduct } = useProduct();
  const { deleteProduct } = useDeleteProduct();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
        // TODO: add button for new product
      }
      <div className="container mt-4">
        <Button
          size="small"
          variant="contained"
          onClick={() => setShowModal(true)}
        >
          New Product +
        </Button>

        <div className="row g-4">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard
                product={p}
                variant="admin"
                onDeleteItem={() => {
                    const res = deleteProduct(p.id);

                    if (res !== undefined) removeProduct(p);
                }}
                btnLabel={"Delete Item"}
              />
            </div>
          ))}
        </div>
      </div>

      <NewProductModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default AdminProducts;
