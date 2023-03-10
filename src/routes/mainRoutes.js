import express from 'express';
import path from 'path';
import nodemailer from "nodemailer"
import { __dirname } from '../helpers/helpers.js';

const router = express.Router();
let senderEmail="uknown", emailSubject, emailRecipient, emailContent; 

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
})

router.post('/compose', async (req, res) => {
    try{
        senderEmail = req.body.senderEmail;
        console.log(senderEmail)
        res.sendFile(path.join(__dirname, 'public', 'html', 'compose.html'));
    } catch(error) {
        res.sendFile(path.join(__dirname, 'public', 'html', 'error.html'));
        console.error(error);
    }
})
router.post('/email-sending', async (req, res) => {
    try{
        console.log(req.body);

        emailRecipient = req.body.emailRecipient;
        emailSubject = req.body.emailSubject;
        emailContent = req.body.emailContent;
        sendEmail(senderEmail, emailSubject, emailRecipient, emailContent);
        // res.status(200).send(`test`);
        res.status(200).sendFile(path.join(__dirname, 'public', 'html', 'success.html'));
    } catch (error) {
        res.sendFile(path.join(__dirname, 'public', 'html', 'error.html'));
        console.error(error);
    }
})


async function sendEmail(senderEmail, emailSubject, emailRecipient, emailContent){
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // no need to set host or port etc.
        auth: {
            user: 'bottlemail.noreply@gmail.com',
            pass: 'rzreggjsysyxzmgo'
        }
    });

    let info = await transporter.sendMail({
      from: `${senderEmail}`,
      to: `${emailRecipient}`,
      subject: `${emailSubject}`,
      text: `${emailContent}\n\n${senderEmail}`,
      //html: `<h4>${senderEmail}</h4>`
    });

transporter.sendMail(info, function(error, info){
    if (error) {
        console.log(error);
        return error
    } else {
        console.log('Email sent: ' + info.response);
    }
});

}

export default router;

