import { Router } from "express";
import { googleLogin } from "../controllers/googleLoginController.js";

const router = Router();

router.get("/test", (req, res) => {
  res.send("Test success");
});

router.post("/google", googleLogin);

export default router;
