import express from "express";
import {
  getUsers,
  verfyUser,
  getListingAdmin,
  verifyListing,
} from "../controllers/admin.controller.js";
const router = express.Router();

router.get("/userList", getUsers);
router.post("/userList", verfyUser);
router.get("/listing", getListingAdmin);
router.get("/verifyListing/:id/:verify", verifyListing);

export default router;
