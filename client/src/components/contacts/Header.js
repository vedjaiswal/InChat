import React from "react";
import { Box, Typography, styled, Avatar } from "@mui/material";

//components
import MenuDialog from "./MenuDialog";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "8vh",
  backgroundColor: theme.palette.secondary.main,
  alignItems: "center",
  justifyContent: "space-between",
}));

// const ImageContainer = styled(Box)({
//   width: "6vh",
//   height: "6vh",
//   backgroundColor: "#fff",
//   borderRadius: "50%",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
// });

const ProfileText = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
}));

function Header() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginLeft: 15,
        }}
      >
        {/* <ImageContainer
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/2987571/screenshots/7084912/luffy-01_4x.png')",
          }}
        >
        </ImageContainer> */}
        <Avatar
          alt="profile pic"
          src="https://cdn.dribbble.com/users/2987571/screenshots/7084912/luffy-01_4x.png"
        />
        <ProfileText>luffytaro</ProfileText>
      </div>
      <div style={{ marginRight: 15 }}>
        <MenuDialog />
      </div>
    </Container>
  );
}

export default Header;
