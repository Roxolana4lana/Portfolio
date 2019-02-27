const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const app = express()

sgMail.setApiKey(process.env.SENDGRID_KEY)
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.get('/send-email', (req, res) => {
    const { recipient, sender, subject, text } = req.query;
    const msg = {
        to: recipient,
        from: sender,
        subject: subject,
        text: text
    }

    sgMail.send(msg)
        .then((msg) => console.log(text));
})

app.listen(4000, () => console.log("Running on Port 4000")); 