import express from 'express';
import path from 'path';
import { __dirname } from '../helpers/helpers.js';

const router = express.Router();
let emailSender, emailReceiver, emailContent; 

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
})

router.post('/compose', async (req, res) => {
    emailSender = req.body.emailSender;
    console.log(req.body);
    res.sendFile(path.join(__dirname, 'public', 'html', 'compose.html'));
})
router.post('/email-sending', async (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, 'public', 'html', 'success.html'));
})

router.post('/send', async (req, res) => {
    
})

export default router;

