import express from  'express';

import {userLogIn,userSignUp} from '../controller/user_controller.js';

const router = express.Router();    

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

export default router;