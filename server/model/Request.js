import mongoose from 'mongoose';
/*
    { 
        name : "Franky",
        description : "Supeerrrrrrrrrrr",
        imageURL : "https://tse1.mm.bing.net/th?id=OIP.isCIg4bUGEpxSFWRGyXF5gHaHa&pid=Api&P=0&h=180",
    },
*/
const reqSchema = new mongoose.Schema({
  to: {
    type: String,
    required:true,
  },
  from: {
    type: String,
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
