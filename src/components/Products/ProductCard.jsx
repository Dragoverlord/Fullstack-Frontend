import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProducts } from "../../context/productContext";
import { useAuth } from "../../context/authContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const { deleteProduct, toggleLike, getOneProduct } = useProducts();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  console.log(item);
  return (
    <Card sx={{ width: 345, margin: "20px", borderRadius: "20px", padding: "5px" }}>
      <CardMedia sx={{ height: 345 , borderRadius: "20px" }} image={item.image} title={item.title} />
      <CardContent onClick={() => navigate(`/products/${item.id}`)}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {item.author == user ? (
          <>
            <Button onClick={() => deleteProduct(item.id)} size="small">
              Delete
            </Button>
          </>
        ) : null}
        {/* <FavoriteBorderIcon
          color="disabled"
          onClick={() => {
            toggleLike(item.id);
          }}
        /> */}
        {item.likes}
        {isLiked ? (
          <>
            <FavoriteIcon
              color="error"
              onClick={() => {
                toggleLike(item.id);
                setIsLiked(false);
              }}
            />
          </>
        ) : (
          <FavoriteBorderIcon
            color="disabled"
            onClick={() => {
              toggleLike(item.id);
              setIsLiked(true);
            }}
          />
        )}
      </CardActions>
    </Card>
  );
}
