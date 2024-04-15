import React, { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function ChatInput() {

    const [ message, setMessage ] = useState('')

    const onSendMessage = (e) =>{
        console.log(message);
        setMessage('')
    }

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
      if (e.key === 'Enter') {
        onSendMessage(e);
      }
    };

  return (
    <div>
      <FormControl style={{ width : "95%", marginLeft : 15 }}>
        <OutlinedInput 
            placeholder="Send message"
            style={{ height : 50 }}
            value={message}
            onKeyDown={handleKeypress}
            onChange={(e)=>setMessage(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onSendMessage}
                    edge="end"
                  >
                    <SendIcon/>
                  </IconButton>
                </InputAdornment>
              }
        />
      </FormControl>
    </div>
  );
}

export default ChatInput;
