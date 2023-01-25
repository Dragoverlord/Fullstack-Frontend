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
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function EditProduct() {
  const { deleteProduct, toggleLike, categories, editProduct, oneProduct } =
    useProducts();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  const [editproduct, setEditProduct] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    quantity: 0,
    warning: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setEditProduct({
        ...editproduct,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setEditProduct({
        ...editproduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handelSave() {
    let Editproduct = new FormData();
    Editproduct.append("title", editproduct.title);
    Editproduct.append("description", editproduct.description);
    Editproduct.append("price", editproduct.price);
    Editproduct.append("category", editproduct.category);
    Editproduct.append("image", editproduct.image);
    Editproduct.append("quantity", editproduct.quantity);
    Editproduct.append("warning", editproduct.warning);

    editProduct(Editproduct);
  }
  console.log(categories);
  console.log(editproduct);

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
          value={oneProduct.title}
          onChange={handleInp}
        />
        <TextField
          label="Description"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="description"
          value={oneProduct.description}
          onChange={handleInp}
        />
        <TextField
          label="Price"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="price"
          value={oneProduct.price}
          onChange={handleInp}
        />
        <TextField
          label="quantity"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="quantity"
          value={oneProduct.quantity}
          onChange={handleInp}
        />
        <TextField
          label="warning"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="warning"
          value={oneProduct.warning}
          onChange={handleInp}
        />
        <TextField
          label="category"
          fullWidth
          variant="filled"
          sx={{ m: 1, bgcolor: "white", color: "black" }}
          name="category"
          value={oneProduct.category}
          onChange={handleInp}
        >
          category
        </TextField>
        <input
          type="file"
          name="image"
          onChange={handleInp}
          style={{ color: "white", margin: "20px 0" }}
        />
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
