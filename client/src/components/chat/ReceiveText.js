import React from "react";
import { Chip, Box, styled } from "@mui/material";



const TextWraper = styled(Box)({
    display : "flex",
    justifyContent : "flex-start"
})

function ReceiveText({ text }) {

    const ReceiveContainer = styled(Chip)({
        borderRadius : "0px 16px 16px 16px",
        maxWidth : "50%",
        '& .MuiChip-label': {
          display: 'block',
          whiteSpace: 'normal',
        },
    });

  return (
    <TextWraper>
      <ReceiveContainer color="secondary" label={text} />
    </TextWraper>
  );
}

export default ReceiveText;
