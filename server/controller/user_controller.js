import User from "../model/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {deleteAvatar, uploadAvatar} from '../utils/cloudinary.js'
import { MongoClient } from 'mongodb';
const JWT_SECRET = process.env.JWT_SECRET;

export const userLogIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ error: "Please enter correct Credential" });
    }

    let passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res.status(401).json({ error: "Please enter correct Credential" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };

    const auth_token = jwt.sign(data, JWT_SECRET);
    return res.status(200).json({ auth_token });
    // res.status(200).send("signedup successfully")
  } catch (error) {
    res.status(500).json("Error: ", error.message);
  }
};

export const userSignUp = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(401).json({ message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const auth_token = jwt.sign(data, JWT_SECRET);
    res.status(200).json({ auth_token });
    // res.status(200).send("signedup successfully")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username: username }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchUser = async (req, res) => {
  try {
    const query = req.params.id;

    // const agg = [
    //     {
    //       '$search': {
    //         'index': 'inchat_search_user', 
    //         'text': {
    //           'query': query, 
    //           'path': [
    //             'username', 'fullname', 'email'
    //           ]
    //         }
    //       }
    //     }, {
    //       '$sort': {
    //         'username': 1, 
    //         'fullname': 1, 
    //         'email': 1
    //       }
    //     }, {
    //       '$project': {
    //         'fullname': 1, 
    //         'username': 1, 
    //         'email': 1, 
    //         'imageUrl': 1, 
    //         'description': 1
    //       }
    //     }
    //   ];
    const agg = [
      {
        '$match': {
          '$or': [
            {
              'username': {
                '$regex': query, 
                '$options': 'i'
              }
            }, {
              'fullname': {
                '$regex': query, 
                '$options': 'i'
              }
            }, {
              'email': {
                '$regex': query, 
                '$options': 'i'
              }
            }
          ]
        }
      }, {
        '$project': {
          'fullname': 1, 
          'username': 1, 
          'email': 1, 
          'imageUrl': 1, 
          'description': 1
        }
      }
    ];
    

    const client = await MongoClient.connect(
      process.env.DB_URL
    );
    const coll = client.db('InChat').collection('users');
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    // console.log(result);
    await client.close();

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const profileUpdate = async (req , res) => {
  try {
    const {fullname , description } = req.body;
    const avatar = req.files ? req.files.avatar : null;
    const updateProfile = {}

    let user = await User.findById(req.user.id);
    if(!user){
      return res.status(404).send("User Not Found")
    }

    if(fullname){
      updateProfile.fullname = fullname;
    }
    if(avatar){
      /* to-do : Delete the existing photo in cloudinary */

      await deleteAvatar(user.imageUrl);
      const uploadUrl = await uploadAvatar(avatar.tempFilePath);
      updateProfile.imageUrl = uploadUrl;
    }
    if(description){
      updateProfile.description = description;
    }

   const userUpdate = await User.findByIdAndUpdate(req.user.id, { $set: updateProfile }, { new: true });
    res.status(200).json(userUpdate);
  } catch (error) {
    
  }
}