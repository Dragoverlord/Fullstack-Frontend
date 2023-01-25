import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <Box sx={{color: "black"}}>
      <h2>{oneProduct.title}</h2>
      <h2>{oneProduct.description}</h2>
      <h2>{oneProduct.price}</h2>
      <h4>{oneProduct.category.title}</h4>
      {oneProduct.image ? (
        <img src={oneProduct.image} width="450" height="350" alt="" />
      ) : (
        <h6>No images here</h6>
      )}
      <br />

      <h5>Reviews:</h5>
    </Box>
  ) : (
    <>
      <CircularProgress />
    </>
  );
};

export default ProductDetails;