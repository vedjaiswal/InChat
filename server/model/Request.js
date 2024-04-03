import mongoose from 'mongoose';

const reqSchema = new mongoose.Schema({
  to: {
    type: String,
    required:true,
  },
  from: {
    type: String,
    required:true
  },
});

const Requests = mongoose.model('requests', reqSchema);

export default Requests;
