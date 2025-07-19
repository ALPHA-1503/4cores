import express from 'express';
import mailjet from 'node-mailjet';
import dotenv from 'dotenv';
import process from 'node:process';

dotenv.config();

const app = express();

app.use(express.json());

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

export default app;