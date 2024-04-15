import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv'
import { Server } from 'socket.io'
import { getUserId } from './utils/getUserId.js';

import Connection from './database/db.js'
import Routes from './routes/routes.js'

import fileUpload from 'express-fileupload'

const app = express();
const PORT = 5000;

Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}));

app.use('/', Routes);

/*Chat App Below*/
export const io = new Server(8000, {
    cors: true,
  });
  
  global.onlineUsers = new Map()
  
  io.on("connection", (socket) => {
    global.chatSocket = socket
    socket.on("User:add", (token) => {
      const userId = getUserId(token)
      onlineUsers.set(userId, socket.id);
      console.log("User Added")
      console.log(global.onlineUsers)
    })
    
    socket.on('Message:Send', (data) => {
      console.log("Message send socket",data.to)
      const setUserSocketId = onlineUsers.get(data.to);
      if (setUserSocketId) {
        console.log("found the person")
        socket.to(setUserSocketId).emit("Message:receive", data.msg);
      }
    })
  })

  


app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT localhost:${PORT}`)
});