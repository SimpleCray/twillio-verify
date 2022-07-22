import { Router } from "express";
import VerifyServices from "./verify";

const router = Router();

// App routes
router.use('/verify', VerifyServices);

export default router;
