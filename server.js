import express from 'express';
import mailjet from 'node-mailjet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'node:process';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
//const port = process.env.PORT || 3000;

app.use(express.json());


// Commenting for Vercel production environment
//app.use(express.static(path.join(__dirname, 'dist')));

const mailjetClient = mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

app.post('/api/send-email', async (req, res) => {
    const { recipientEmail, recipientName, subject, text, isHtml } = req.body;

    try {
        const result = await mailjetClient
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [
                    {
                        From: {
                            Email: 'contact@4cores.be',
                            Name: '4CORES'
                        },
                        To: [
                            {
                                Email: recipientEmail,
                                Name: recipientName
                            }
                        ],
                        Subject: subject,
                        [isHtml ? 'HTMLPart' : 'TextPart']: text
                    }
                ]
            });

        res.status(200).json({ success: true, result: result.body });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

//app.get('*', (req, res) => {
//    const indexPath = path.join(__dirname, 'dist', 'index.html');
//    console.log('Attempting to send index.html from:', indexPath); // <-- Add this
//    res.sendFile(indexPath);
//});
