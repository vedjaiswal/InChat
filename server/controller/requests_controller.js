import Requests from "../model/Request.js";
import User from "../model/UserSchema.js";
import Friends from "../model/friends.js";

export const sendRequest = async (req,res) => {
    try {
        /*
            To do :-
            Check if the user  is already a friend or not 
            if yes then terminate the request

            done
        */

       /* 
           to = sending the request to 
           from = loggedin user 
       */

        const {to} = req.body; // to,from --> id
        const from = req.user.id;
        const toUser = await User.findOne({ _id: to }).select("-password");
        const fromUser = await User.findOne({ _id: from }).select("-password");
        console.log(toUser);
        console.log(fromUser)
        if(!toUser || !fromUser || (req.user.id !== fromUser.id)){
            return res.status(400).json({error:"Users are invalid"});
        }

        const isFriend = await Friends.findOne({
            user:req.user.id,
            friend:toUser.username
        })
        
        if(isFriend){
            return res.status(409).json({message:"Already a Friend"});
        }
       
        const requestSentAlready = await Requests.findOne({
            to:to,
            from:from,
        });
        if(requestSentAlready){
            return res.status(409).json({error:"request already sent"});
        }

        await Requests.create({
            to:to,
            from:from,
            toUsername : toUser.username,
            fromUsername : fromUser.username,
            description : fromUser.description,
            imageUrl : fromUser.imageUrl
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

export const showReceivedRequest = async (req,res) => {
    try {
        // const user = await User.findOne({_id : req.user.id}).select("-password");
        // console.log(user)
        /*
            user = loggedin user 
            checking the user in "to" because we are checking the request sent to the loggedin user

            to = request receiver
            from = request sender
        */
        const receiveRequestList = await Requests.find({
            to:req.user.id
        }).select("-to");
        console.log(receiveRequestList)
        return res.status(200).json(receiveRequestList);

    } catch (error) {
        res.status(500).json('Error: ', error.message);  
    }
}

export const requestAction = async (req,res) => {
    try {
        /*
            to = loggedin user
            from = request sent to the loggedin user
        */
        const to = req.user.id;
        const {from,action} = req.body; // to,from --> id
        /* Accept Request */
        if(action){
            const toUser = await User.findOne({
                _id : to
            })
            const fromUser = await User.findOne({
                _id : from
            })
    
           if((req.user.id !== toUser.id) || !toUser || !fromUser){
                return res.status(401).json({message:"User is invalid"});
           }
            await Requests.deleteOne({
                to:to,
                from:from
            });
            const isFrnd = await Friends.findOne({
                user : req.user.id,
                friend : from
            })
            console.log(isFrnd)
            if(isFrnd){
                return res.status(401).json({message:"Already a friend"});
            }
    
            /* we want "from" users desc and image url */
            await Friends.create({
                user : req.user.id,
                friend : fromUser.username,
                description : fromUser.description,
                imageUrl : fromUser.imageUrl
    
            });
    
            /* we want "from" users desc and image url */
            console.log("hello : " + fromUser.id)
            await Friends.create({
                user : fromUser.id,
                friend : toUser.username,
                description : toUser.description,
                imageUrl : toUser.imageUrl
            })
            
            return res.status(200).json({message:"Friends Added"});
        }
        /* Accept Request End */
        else{
            const deleteReq =  await Requests.deleteOne({
                to:to,
                from:from
            });
            if(deleteReq.deletedCount !== 1){
                console.log("not deleted");
                return res.status(404).json({message : "Request Not Found"});
            }
            console.log(deleteReq);
            return res.status(200).json({message:"Request deleted Successfully"});
        }

    } catch (error) {
        res.status(500).json(error.message);  
    }
}

// export const rejectRequest = async (req,res) => {
//     try {
//         /*
//             to = loggedin user
//             from = request sent to the loggedin user
//         */
       
//     } catch (error) {
//         res.status(500).json(error.message);  
//     }
// }

export const getAllFriends = async (req,res) => {
    try {
        const allFriends = await Friends.find({user : req.user.id});
        return res.status(200).json(allFriends);
    } catch (error) {
        res.status(500).json(error.message);
    }
}