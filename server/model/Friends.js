import mongoose from 'mongoose';

const friend = new mongoose.Schema({
    username:{
        type: String,
        ref: 'user',
        required:true,
    },
    frnd: {
        type: String,
        required:true
    }
});

const Friends = mongoose.model('friend', friend);

export default Friends;
