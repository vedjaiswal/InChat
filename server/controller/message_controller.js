import Message from '../model/MessageSchema.js'

export const addMessages = async (req, res) => {
    try {
        const {message,to} = req.body;
        const from = req.user.id

        await Message.create({
            message:{
                text:message
            },
            users:[to,from],
            sender:from
        })
        
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
        const data  = await Message.find({
            users:{
                $all:[from,to]
            }
        }).sort({ updatedAt: 1 });
        // console.log(data);
        const projectedMessages = data.map((msg) => {
            return {
              fromSelf: msg.sender.toString() === from,
              message: msg.message.text,
            };
          });
        
        return res.status(200).json(projectedMessages);
    } catch (error) {
        res.status(500).json({"Error":error.message});        
    } 
}

