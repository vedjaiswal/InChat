import Requests from "../model/Request.js";
import User from "../model/UserSchema.js";
import Friends from "../model/friends.js";

export const sendRequest = async (req,res) => {
    try {
        /*
            To do :-
            Check if the user  is already a friend or not 
            if yes then terminate the request
        */

        const {to,from} = req.body;
        /* 
            to = sending the request to 
            from = loggedin user 
        */
       
        const toUser = await User.findOne({ username: to }).select("-password");
        const fromUser = await User.findOne({ username: from }).select("-password");
        console.log(toUser);
        console.log(fromUser)
        if(!toUser || !fromUser || (from !== fromUser.username)){
            return res.status(401).json({error:"Users are invalid"});
        }
        const requestSentAlready = await Requests.findOne({
            to:to,
            from:from
        });
        if(requestSentAlready){
            return res.status(401).json({error:"request already sent"});
        }

        const newRequest = await Requests.create({
            to:to,
            from:from,
        });
        return res.status(200).json({message:"Request sent successfully"})

    } catch (error) {
        res.status(500).json('Error: ', error.message);  
    }
}

export const showSentRequest = async (req,res) => {
    try {
        /* 
            from = loggedin user
        */
        const {from} = req.body;
        const sentRequestList = await Requests.find({
            from:from
        });

        return res.status(200).json(sentRequestList);

    } catch (error) {
        res.status(500).json('Error: ', error.message);  
    }
}

export const showReceiveRequest = async (req,res) => {
    try {
        const {user} = req.body;

        /*
            user = loggedin user 
            checking the user in "to" because we are checking the request sent to the loggedin user
        */
       
        const receiveRequestList = await Requests.find({
            to:user
        });
        
        return res.status(200).json(receiveRequestList);

    } catch (error) {
        res.status(500).json('Error: ', error.message);  
    }
}

export const acceptRequest = async (req,res) => {
    try {
        /*
            to = loggedin user
            from = request sent to the loggedin user
            username = loggedin user's username 
        */
        const {to,from,username} = req.body;
         await Requests.deleteOne({
            to:to,
            from:from
        })
        const isFrnd = await Friends.findOne({username:username,frnd:from});
        if(isFrnd){
            return res.status(401).json({message:"Already a friend"})
        }
        await Friends.create({
            username:username,
            frnd:from
        })
        await Friends.create({
            username:from,
            frnd:username
        })
        
        return res.status(200).json({message:"Friends Added"});

    } catch (error) {
        res.status(500).json('Error: ', error.message);  
    }
}
