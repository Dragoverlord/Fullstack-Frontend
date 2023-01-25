import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProducts } from "../../context/productContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import "../Products/ProductCard.css";
import backsimg from "../storage/narko2.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function EditProduct() {
  const {
    deleteProduct,
    toggleLike,
    getOneProduct,
    getCategories,
    categories,
    addProduct,
    editProduct,
  } = useProducts();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

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
    let editProduct = new FormData();
    editProduct.append("title", product.title);
    editProduct.append("description", product.description);
    editProduct.append("price", product.price);
    editProduct.append("category", product.category);
    editProduct.append("image", product.image);
    editProduct(editProduct);
  }
  console.log(categories);
  console.log(product);

  return (
    <Card
      className="cardproduct"
      sx={{
        width: "60%",
        margin: "20px auto",
        padding: "5px",
        background: `url(${backsimg})`,
      }}
    >
      <Box
        className="addproduct"
        sx={{
          width: "90%",
          height: "50%",
          margin: "50px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "black",
          color: "white",
          padding: "20px",
        }}
      >
        <Typography style={{ color: "white" }}>Add new product</Typography>
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
          style={{ color: "white", margin: "20px 0" }}
        />
        <FormControl fullWidth>
          <InputLabel
            id="select-label"
            style={{
              backgroundColor: "black",
              color: "white",
              margin: "20px 0",
            }}
          >
            Category
          </InputLabel>
          <Select
            value={product.category}
            labelId="select-label"
            name="category"
            onChange={handleInp}
            style={{ backgroundColor: "black", color: "white" }}
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
    </Card>
  );
}
