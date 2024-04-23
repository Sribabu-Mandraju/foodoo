import express from "express";
import { signin, signup } from "../controllers/auth.controllers.js";
import { DonateFood,GetALlDonations,UpdateDonationByID ,DeleteDonation} from "../controllers/food.controllers.js";
import { verifyToken } from "../utils/verifyToken.js";



const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

//food routes
router.post("/donatefood",verifyToken,DonateFood)
router.get("/getdonations",verifyToken,GetALlDonations)
router.put("/updatedonation/:id",verifyToken,UpdateDonationByID)
router.delete("/deletedonation/:id",verifyToken,DeleteDonation)


export default router;
