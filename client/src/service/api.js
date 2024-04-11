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

export const sentRequest = async(to, from, token) =>{
    try{
        let response = await axios.post(`${URL}/sendRequest`, { to : to, from : from}, {
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

export const requestAction = async(token, to, from, action)=>{
    try{
        console.log("to : " + to + " from : " + from + " action : " + action + " token : " + token);
        let response = await axios.post(`${URL}/requestAction`, {to : to, from : from, action : action}, {
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