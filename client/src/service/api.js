import axios from 'axios'

const URL = "http://localhost:5000";

export const authenticateSignupApi = async(data) => {
    try{
        let response = await axios.post(`${URL}/signup`, data);
        return response;
    }
    catch(error){
        console.log("error while authenticating signup : ", error);
    }
}

export const authenticateLoginApi = async(data) => {
    try{
        return await axios.post(`${URL}/login`, data);
    }
    catch(error){
        console.log("error while authenticating login : ", error);
        return error.response;
    }
}

export const getSearchedUser = async(queryText, token) => {
    try{
        let response = await axios.get(`${URL}/searchUser/${queryText}`, {
            headers : {
                auth_token : token
            }
        })
        return response;
    }
    catch(error){
        console.log("error while getting all users : ", error);
        return error.response;
    }
}

export const sentRequest = async(to, token) =>{
    try{
        let response = await axios.post(`${URL}/sendRequest`, { to : to}, {
            headers : {
                auth_token : token
            }
        })
        console.log("sent request response : ",response)
        // return response;
    }
    catch(error){
        console.log("error while sending request : ", error);
        return error.response;
    }
}

export const getAllRequests = async(token) =>{
    try{
        let response = await axios.get(`${URL}/showReceivedRequest`, {
            headers : {
                auth_token : token
            }
        })
        return response
    }
    catch(error){
        console.log("error while getting all request", error);
        return error.message
    }
}

export const requestAction = async(token, from, action)=>{
    try{
        // console.log("from : " + from + " action : " + action + " token : " + token);
        let response = await axios.post(`${URL}/requestAction`, {from : from, action : action}, {
            headers : {
                auth_token : token
            }
        })
        return response;
    }
    catch(error){
        console.log("error while accepting/rejecting request : ", error);
        return error.message;
    }
}

export const getAllFriends = async(token) =>{
    try{
        let response = await axios.get(`${URL}/getAllFriends`, {
            headers : {
                auth_token : token
            }
        })
        return response
    }
    catch(error){
        console.log("error while getting all friends", error);
        return error.message
    }
}

export const updateProfile = async(token, data)=>{
    try{
        let response = await axios.patch(`${URL}/profileUpdate`, data, {
            headers :{
                'auth_token' : token
            }
        });
        return response;
    }
    catch(error){
        console.log("error while updating Profile details : ", error);
    }
}

export const getAllMessages = async(token, to) =>{
    try{
        let response = await axios.post(`${URL}/getAllMessages`, { to : to }, {
            headers : {
                auth_token : token
            }
        })
        return response
    }
    catch(error){
        console.log("error while getting all messages", error);
        return error.message
    }
}

export const addMessage = async(token, to, message) =>{
    try{
        let response = await axios.post(`${URL}/addMessages`, { to : to, message : message}, {
            headers : {
                auth_token : token
            }
        })
        // console.log("sent message response : ",response)
        return response;
    }
    catch(error){
        console.log("error while adding message : ", error);
        return error.response;
    }
}