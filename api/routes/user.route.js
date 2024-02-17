import express from "express";
import { deleteUser, getUser, getUserListings, test, updateUserInfo } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";
const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUserInfo);
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)
export default router;
