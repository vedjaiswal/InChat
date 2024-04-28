import React, { forwardRef } from "react";
import { Chip, Box, styled } from "@mui/material";

const TextWraper = styled(Box)({
    display : "flex",
    justifyContent : "flex-start"
})

const ReceiveContainer = styled(Chip)({
  borderRadius : "16px 16px 16px 0px",
});

    // max-width : "50%",
    // & .MuiChip-label: {
    //   display: 'block',
    //   whiteSpace: 'normal',
    // },
    

const ReceiveText = forwardRef(({ text }, ref) => {

  return (
    <TextWraper ref={ref}>
      <ReceiveContainer color="secondary" label={text} />
    </TextWraper>
  );
})

export default ReceiveText;
