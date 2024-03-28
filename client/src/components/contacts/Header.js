import React from "react";
import { Box, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "8vh",
  backgroundColor: theme.palette.secondary.main,
  alignItems: "center",
  justifyContent : 'space-between'
}));

const ImageContainer = styled(Box)({
  width: "6vh",
  height: "6vh",
  backgroundColor: "#fff",
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

function Header() {
  return (
    <Container>
      <div style={{display : 'flex', alignItems:'center'}}>
        <ImageContainer
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/2987571/screenshots/7084912/luffy-01_4x.png')",
          }}
        />
        luffytaro
      </div>
      <div>
        <MenuIcon />
      </div>
    </Container>
  );
}

export default Header;
