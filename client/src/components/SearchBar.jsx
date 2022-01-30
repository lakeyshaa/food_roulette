import { Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
//import { button } from "react-bootstrap";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [restaurants, setRestaurants] = useState([]);


  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      `https://api.documenu.com/v2/restaurants/zip_code/${searchValue}?size=20`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "f93a8d648c3c616b30ca435acf4e8573"
        },
      }
    )
      .then((response) => response.json())
      .then(data => {
        randomFood(data.data)
        setRestaurants(data.data)
        setLoading(false)
      }
      )
      .catch((err) => {
        console.error(err);
      });

  }


  const randomFood = (arr) => {
    const restaurant = arr[Math.floor(Math.random() * arr.length)]
    setRestaurant(restaurant)
  }

  const pickAgain = () => {
    randomFood(restaurants)
  }

  const reset = () => {
    setRestaurants([])
    setSearchValue("")
    setRestaurant(null)
  }

  return (
    <>
    <Box className = "box" sx={{ mt: 15, mr: 20, ml: 15  }} >
      {!restaurants.length ? (
        <form className="search">
          <TextField  size="small" id="outlined-basic" label="Enter your Zipcode" color="secondary" focused variant="outlined" value={searchValue}
            onChange={handleSearchInputChanges} />

          
          <Button  variant="contained" onClick={handleSearch} type="submit" >Search</Button>
        </form>
      ) : (
        <>
          {searchValue}<Button sx={{ ml: 5}} variant="contained" onClick={reset}>Reset</Button>
        </>
      )}
        </Box>

      {loading && <p><CircularProgress></CircularProgress></p>}

      {restaurant && (

        <Card sx={{ maxWidth: 345, mx: "auto", my: 5 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {restaurant?.restaurant_name}
            </Typography>
            <p>
            {restaurant?.restaurant_phone}
            </p>
            <p>
            {restaurant?.address.street} 
            </p>
            <p>
            {restaurant?.address.city}, {restaurant?.address.state} {restaurant?.address.postal_code}
            </p>
            {/* {restaurant?.restaurant.geo}  */}
            {restaurant?.price_range}
            {restaurant?.cuisines}
          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ m: 5 }} href={restaurant?.restaurant_website}>Website</Button>
            <Button variant="contained" onClick={pickAgain}>Pick Again</Button>
          </CardActions>
        </Card>

      )}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
};

export default SearchBar;
