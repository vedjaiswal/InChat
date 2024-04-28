import jwt from 'jsonwebtoken'

export const getUserId = (token)=>{
    if (!token) {
        console.log("No token found")
    }
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const data = jwt.verify(token, JWT_SECRET);
        return data.user.id;
    } catch (error) {
        console.log("error while getUserId middleware",error.message)
    }
}