import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seen :{
      type: Boolean,
      default:false,
    }
  },
  {
    timestamps: true,
  }
);

const message = mongoose.model("Messages", messageSchema);
export default message
