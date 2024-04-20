import React, { useContext, useEffect } from "react";
import { Box, Typography, styled, Avatar } from "@mui/material";

import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

//components
import MenuDialog from "./MenuDialog";

//context 
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "8.8vh",
  backgroundColor: theme.palette.primary.main,
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

  const { user } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(()=>{
    // console.log(user)
    const userCookie = Cookies.get("auth_token");
    if (!userCookie) {
      navigate('/login')
    }
    // else console.log(JSON.parse(userCookie).user)
  }, [])

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
        <ProfileText>{user.username}</ProfileText>
      </div>
      <div style={{ marginRight: 15 }}>
        <MenuDialog />
      </div>
    </Container>
  );
}

export default Header;
