import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET;

export const getUserId = (token)=>{
    if (!token) {
        console.log("No token found")
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        return data.user.id;
    } catch (error) {
        console.log("error while getUserId middleware",error.message)
    }
}