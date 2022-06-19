import React from "react";
import "./App.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductsContext } from "./App";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const context = React.useContext(ProductsContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
            className="navbar-link"
          >
            Web shop
          </Typography>
          <Typography
            variant="h6"
            component="div"
          >
            Vasa korpa
          </Typography>
          <IconButton size="large" color="inherit" onClick={() => navigate("/cart")} className="navbar-link">
            <Badge badgeContent={context.count} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
