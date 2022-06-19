import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import products from "./products";

type ProductsProps = {
  onClick: (productID: string) => void;
};

const Products = ({ onClick }: ProductsProps) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {products.map((product) => (
        <ProductItem
          product={product}
          onClick={onClick}
        />
      ))}
    </Grid>
  );
};

export default Products;
