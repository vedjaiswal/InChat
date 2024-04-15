import mongoose from 'mongoose';
/*
    {
        name : "Zorojuro",
        lastMessage : "Where are you?",
        description : "Strongest Swordmen in the world",
        imageURL : "https://i.pinimg.com/originals/de/41/75/de41752587e2d6d950b1d38bdb8917b8.jpg",
        date : "11:11pm",
    }
*/
const friend = new mongoose.Schema({
   user : {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
   friend : {
    type : String,
    ref:'User',
    required : true
   },
   lastMessage : {
    type : String,
    default:"New Message"
   },
   description : {
    type : String,
    required:true
   },
   imageUrl : {
    type : String,
    required : true
   }
});

const Friends = mongoose.model('friend', friend);

export default Friends;
