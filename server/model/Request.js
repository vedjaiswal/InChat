import mongoose from 'mongoose';
/*
    {
        to:"yolo",
        from:"vedjaiswal",
        name : "Franky",
        description : "Supeerrrrrrrrrrr",
        imageURL : "https://tse1.mm.bing.net/th?id=OIP.isCIg4bUGEpxSFWRGyXF5gHaHa&pid=Api&P=0&h=180",
    },
*/
const reqSchema = new mongoose.Schema({
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  toUsername : {
    type : String,
    ref : 'User',
    required:true
  },
  fromUsername : {
    type : String,
    ref : 'User',
    required:true
  },
  description : {
    type : String,
    required : true
  },
  imageUrl : {
    type : String,
    required : true
  }
});

const Requests = mongoose.model('requests', reqSchema);

export default Requests;
