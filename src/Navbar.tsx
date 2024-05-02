import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorElHowItWorks, setAnchorElHowItWorks] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElPricing, setAnchorElPricing] = React.useState(null);
  const [anchorElResources, setAnchorElResources] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);

  const handleHowItWorksClick = (event) => {
    setAnchorElHowItWorks(event.currentTarget);
  };

  const handleProductsClick = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handlePricingClick = (event) => {
    setAnchorElPricing(event.currentTarget);
  };

  const handleResourcesClick = (event) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElHowItWorks(null);
    setAnchorElProducts(null);
    setAnchorElPricing(null);
    setAnchorElResources(null);
    setAnchorElMenu(null);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          style={{
            justifyContent: "space-between",
            marginLeft: isMobile ? "10px" : "65px",
          }}
        >
          <Typography variant="h6">team.flow</Typography>
          {isMobile ? (
            <IconButton
              aria-label="menu"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              color="inherit"
              sx={{ marginRight: 0 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                aria-controls="how-it-works-menu"
                aria-haspopup="true"
                onClick={handleHowItWorksClick}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
              >
                How it works
              </Button>
              <Menu
                id="how-it-works-menu"
                anchorEl={anchorElHowItWorks}
                open={Boolean(anchorElHowItWorks)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>

              <Button
                aria-controls="products-menu"
                aria-haspopup="true"
                onClick={handleProductsClick}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
              >
                Products
              </Button>
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>Product 1</MenuItem>
                <MenuItem onClick={handleClose}>Product 2</MenuItem>
                <MenuItem onClick={handleClose}>Product 3</MenuItem>
              </Menu>

              <Button
                aria-controls="pricing-menu"
                aria-haspopup="true"
                onClick={handlePricingClick}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
              >
                Pricing
              </Button>
              <Menu
                id="pricing-menu"
                anchorEl={anchorElPricing}
                open={Boolean(anchorElPricing)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>Plan 1</MenuItem>
                <MenuItem onClick={handleClose}>Plan 2</MenuItem>
                <MenuItem onClick={handleClose}>Plan 3</MenuItem>
              </Menu>

              <Button
                aria-controls="resources-menu"
                aria-haspopup="true"
                onClick={handleResourcesClick}
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
              >
                Resources
              </Button>
              <Menu
                id="resources-menu"
                anchorEl={anchorElResources}
                open={Boolean(anchorElResources)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose}>Resource 1</MenuItem>
                <MenuItem onClick={handleClose}>Resource 2</MenuItem>
                <MenuItem onClick={handleClose}>Resource 3</MenuItem>
              </Menu>
            </div>
          )}
          {!isMobile && (
            <div>
              <Button color="inherit">Log in</Button>
              <Button
                color="inherit"
                sx={{ backgroundColor: "purple", color: "white" }}
              >
                Get started free
              </Button>
            </div>
          )}
          <Menu
            id="menu"
            anchorEl={anchorElMenu}
            open={Boolean(anchorElMenu)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Log in</MenuItem>
            <MenuItem onClick={handleClose}>Get started free</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
