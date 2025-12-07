import Button from "@mui/material/Button";
import { useProduct } from "../contexts/ProductContext/useProduct";
import ProductCard from "../components/ProductCard/ProductCard";

const AdminProducts = () => {
  const { products } = useProduct();


  return (
    <>
      {
        // TODO: add button for new product
      }
      <div className="container mt-4">
        <Button
          size="small"
          variant="contained"
          onClick={() => console.log("new product")}
        >
          New Product +
        </Button>
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} variant="admin" onDeleteItem={() => console.log("DELETE ITEM")} btnLabel={"Delete Item"}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
