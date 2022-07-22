import { Router } from 'express';
require('dotenv').config();

// const router = Router();
// const twilio = require('twilio');
// const serviceSid = process.env.SERVICE_SID;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = new twilio(accountSid, authToken);

// router.get('/test', async (req, res, next) => {
//     try {
//         console.log('get in')
//         client.verify.v2
//             .services(serviceSid)
//             .verifications.create({ to: '+84375911341', channel: 'sms' })
//             .then((verification) => {
//                 console.log('return')
//                 console.log(verification.sid);
//                 res.status(200).send(data);
//             });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ message: 'Test failed' });
//     }
// });

// const router = Router();
// const twilio = require('twilio');
// const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
// const client = twilio('AC5d39305087853c73a159206f5853e564', '85eab5e4fefa5ff52098497335586443');

// router.get('/get-code', async (req, res, next) => {
//     let verificationRequest;

//     try {
//         verificationRequest = await client.verify.services('VA143a44056f2579ad70b998f0b3ee540f').verifications.create({ to: '+84375911341', channel: 'sms' });
//         return res.status(200).send({message: 'Code sent!'});
//     } catch (e) {
//         return res.status(500).send(e);
//     }
// });

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
        console.log(verificationResult)
        if (verificationResult.status === 'approved') {
            req.user.role = 'access secret content';
            await req.user.save();
            return res.status(200).send({verified: true, message: 'Phone number verified!'});
        } else {
            return res.status(500).send({message: `Wrong verify code!`});
        }
    } catch (e) {
        return res.status(500).send(e);
    }
});

export default router;
