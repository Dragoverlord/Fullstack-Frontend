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
import "../Products/ProductCard.css"
import backsimg from "../storage/narko2.jpg"

export default function ProductCard({ item }) {
  const { deleteProduct, toggleLike, getOneProduct } = useProducts();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();

  console.log(item);
  return (
    <Card className="cardproduct" sx={{ width: "320px", margin: "20px",  padding: "5px" , background: `url(${backsimg})` }}>
      <CardMedia sx={{ height: "320px" }} image={item.image} title={item.title} />
      <CardContent onClick={() => navigate(`/products/${item.id}`)}>
        <Typography style={{ color: "white" }} gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography style={{ color: "white" }} variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography style={{ color: "white" }} variant="caption" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {item.author == user ? (
          <>
            <Button style={{ color: "white" }} onClick={() => deleteProduct(item.id)} size="small">
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
