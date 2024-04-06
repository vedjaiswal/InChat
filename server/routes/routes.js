import express from  'express';
import { fetchuser } from '../middleware/fetchUser.js'
import {getUser, userLogIn,userSignUp} from '../controller/user_controller.js';
import { sendRequest,showSentRequest,showReceivedRequest,acceptRequest } from '../controller/requests_controller.js';
const router = express.Router();    

router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.post('/getUser',fetchuser,getUser);

router.post('/sendRequest',fetchuser,sendRequest);
router.post('/showSentRequest',fetchuser,showSentRequest);
router.get('/showReceivedRequest',fetchuser,showReceivedRequest);
router.post('/acceptRequest',fetchuser,acceptRequest);

export default router;