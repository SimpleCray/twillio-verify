import { Router } from 'express';
require('dotenv').config();

const router = Router();
const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

router.get('/get-code', async (req, res, next) => {
    const { to } = req.query;
    let verificationRequest;
    try {
        verificationRequest = await client.verify.services(VERIFICATION_SID).verifications.create({ to: `+${to}`, channel: 'sms' });
        return res.status(200).send({message: 'Code sent!'});
    } catch (e) {
        if (e.code === 60200) {
            return res.status(500).send({message: `Invalid phone number!`});
        } else return res.status(500).send(e);
    }
});

router.post('/check-code', async (req, res, next) => {
    const { code, to } = req.body;
    let verificationResult;
    try {
        verificationResult = await client.verify.services(VERIFICATION_SID).verificationChecks.create({ to, code });
        if (verificationResult.status === 'approved') {
            return res.status(200).send({verified: true, message: 'Phone number verified!'});
        } else {
            return res.status(500).send({message: `Wrong verify code!`});
        }
    } catch (e) {
        return res.status(500).send(e);
    }
});

export default router;
