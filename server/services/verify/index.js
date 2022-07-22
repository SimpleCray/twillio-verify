import { Router } from 'express';

const router = Router();

router.get('/test', async (req, res, next) => {
    try {
        res.status(200).json({ message: "Test successful" });
    } catch (error) {
        res.status(500).json({ message: "Test failed" });
    }
});

export default router;
