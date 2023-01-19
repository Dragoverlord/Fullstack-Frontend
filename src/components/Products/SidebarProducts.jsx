import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import React, { useEffect, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../context/productContext";

const SidebarProducts = () => {
  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid sx={{bgcolor: "white", margin: "auto 40px" }}>
      <Paper sx={{display:"flex" , flexDirection: "column" , margin: "20px" , padding: "10px"}}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl>
          <FormLabel>Categories</FormLabel>
          <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
            <FormControlLabel value="all" control={<Radio />} label="Все" />
            <FormControlLabel
              value="Бестселлеры"
              control={<Radio />}
              label="Бестселлеры"
            />
            <FormControlLabel
              value="Фантастика"
              control={<Radio />}
              label="Фантастика"
            />
            <FormControlLabel value="Ужасы" control={<Radio />} label="Ужасы" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <RadioGroup
            onChange={(e) => fetchByParams("price_lte", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="Все" />
            <FormControlLabel
              value={100}
              control={<Radio />}
              label="99 $"
            />
            <FormControlLabel
              value={200}
              control={<Radio />}
              label="199 $"
            />
            <FormControlLabel
              value={300}
              control={<Radio />}
              label="299 $"
            />
            <FormControlLabel
              value={500}
              control={<Radio />}
              label="499 $"
            />
            <FormControlLabel
              value={1000}
              control={<Radio />}
              label="999 $"
            />
            <FormControlLabel
              value={2100}
              control={<Radio />}
              label="2100 $"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SidebarProducts;
