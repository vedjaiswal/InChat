import React, { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

//api
import { addMessage } from "../../service/api";

function ChatInput( { currentFriend, token, socket, setMessages } ) {

    const [ message, setMessage ] = useState('')

    const onSendMessage = async(e) =>{
        // console.log(message);
        let response = await addMessage(token, currentFriend.friendId, message);
        socket.current.emit("Message:Send", {
          to : currentFriend._id,
          msg : message
        })
        // messages.push({ fromSelf : true, message : message })
        // setMessages(messages);

        setMessages((prev)=>  [ ...prev, { fromSelf : true, message : message } ])

        // console.log(response)
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
