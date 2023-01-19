import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useProducts } from "../../context/productContext";

const AddProduct = () => {
  const { user } = useAuth();
  const { getCategories, categories, addProduct } = useProducts();

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: 0,
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handelSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addProduct(newProduct);
  }
  console.log(categories);
  console.log(product);

  return (
    <>
      {user !== null ? (
        <Box
          sx={{
            width: "40vw",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            color: "black",
            padding: "20px"
          }}
        >
          <Typography>Add new product</Typography>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="title"
            value={product.title}
            onChange={handleInp}
          />
          <TextField
            label="Description"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="description"
            value={product.description}
            onChange={handleInp}
          />
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            name="price"
            value={product.price}
            onChange={handleInp}
          />
          <input
            type="file"
            name="image"
            onChange={handleInp}
            sx={{ bgcolor: "white", color: "black" }}
          />
          <FormControl fullWidth>
            <InputLabel
              sx={{ bgcolor: "white", color: "black" }}
              id="select-label"
            >
              Category
            </InputLabel>
            <Select
              value={product.category}
              labelId="select-label"
              name="category"
              onChange={handleInp}
              sx={{ bgcolor: "white", color: "black" }}
            >
              {categories?.map((item) => (
                <MenuItem
                  sx={{ bgcolor: "white", color: "black" }}
                  value={item.id}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{ m: 1, bgcolor: "white", color: "black" }}
            variant="outlined"
            fullWidth
            size="large"
            onClick={handelSave}
          >
            Add product
          </Button>
        </Box>
      ) : (
        <>You are not User</>
      )}
    </>
  );
};

export default AddProduct;
