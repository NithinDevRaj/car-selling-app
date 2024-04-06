import express from "express";
import { deleteUser, getUser, getUserListings, test, updateUserInfo } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";
const router = express.Router();

router.get("/test", test);
router.post("/update/:id", updateUserInfo);
router.delete('/delete/:id', deleteUser)
router.get('/listings/:id', getUserListings)
router.get('/:id', getUser)
export default router;
