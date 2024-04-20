import React, { useState } from "react";
import { Chip, Box, styled } from "@mui/material";



const TextWraper = styled(Box)({
    display : "flex",
    justifyContent : "flex-start"
})

function ReceiveText({ text = 'hey' }) {

    const [ msgText, setMsgText ] = useState(text)

    const ReceiveContainer = styled(Chip)`
        border-radius : "0px 16px 16px 16px",
        max-width : "50%",
        & .MuiChip-label: {
          display: 'block',
          whiteSpace: 'normal',
        },
        `
        // ${({ msgText }) => msgText.length > 50 && `height: auto;`}

  return (
    <TextWraper>
      <ReceiveContainer color="secondary" label={text} />
    </TextWraper>
  );
}

export default ReceiveText;
