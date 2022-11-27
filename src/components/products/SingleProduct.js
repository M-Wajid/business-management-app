import { useState } from "react";
import { Product, ProductAddToCart, ProductImage } from "../../styles/product";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const [setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
      </Product>
      <ProductAddToCart
        variant="contained"
        onClick={() => showProductDetailDialog()}
      >
        Details
      </ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
}
