import Messages from '../model/MessageSchema.js'
import Friends from "../model/FriendsSchema.js";
export const addMessages = async (req, res) => {
    try {
        /* to,from : ID */
        const {message,to} = req.body;
        const from = req.user.id

        await Messages.create({
            message:{
                text:message
            },
            users:[to,from],
            sender:from
        })
        /* Update the lastMessage */
        const updateLastMessage = await Friends.findOneAndUpdate(
            { user : from , friendId : to },
            {$set : { lastMessage : message }},
            { new : true }
        );
        console.log(updateLastMessage);
        if(!updateLastMessage){
            return res.status(404).send("Friend entry not found while updating lastMessage");
        }

        return res.status(200).json({"Message":"Message added successfully"});
    } catch (error) {
        res.status(500).json({"Message": "Message not added","Error":error.message});        
    } 
}

export const getAllMessages = async (req, res) => {
    try {
        const {to} = req.body;
        const from = req.user.id;
        if(from === to){
            return res.status(500).send("Please check the auth_token and -from-")
        }
        const data  = await Messages.find({
            users:{
                $all:[from,to]
            }
        }).sort({ updatedAt: 1 });
        // console.log(data);
        const projectedMessages = data.map((msg) => {
            return {
              fromSelf: msg.sender.toString() === from,
              message: msg.message.text,
              seen : msg.seen,
            };
          });
        
        return res.status(200).json(projectedMessages);
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json({"Error":error.message});        
    } 
}

export const readMessage = async (req,res) =>{
    try {
        /*
            from : loggedin user
            to : messaging to
            both ID's
        */
        const  from = req.user.id;
        const {to} = req.body;
        const isSeen = await Messages.updateMany(
            { 
                seen: false,
                "users.0":from,
                "users.1" : to
            }, // Condition
            { $set: { seen: true }}, // Update
            { new : true}
        );
        console.log(isSeen);
        if(isSeen.modifiedCound == 0){
            return res.status(404).send("Message not found")
        }
        return res.status(200).send("Message got read");
    } catch (error) {
        res.status(500).json({"Error":error.message});       
    }
}