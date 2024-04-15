import React from "react";
import { Chip, Box, styled } from "@mui/material";

const SendContainer = styled(Chip)({
  borderRadius : "16px 0px 16px 16px",
});

const TextWraper = styled(Box)({
    display : "flex",
    justifyContent : "flex-end"
})

function SendText({ text }) {
  return (
    <TextWraper>
      <SendContainer color="primary" label={text} />
    </TextWraper>
  );
}

export default SendText;
