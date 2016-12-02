'use strict'
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
var port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: false }));

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'peinihwang128@gmail.com', // Your email id
        pass: 'peinihwang0325' // Your password
    }
});
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + 'client/index.html'));
});
app.post('/contact', function (req, res) {
    var text = 'You have new message from contact form\n=============================\n' +
        '\nName: ' + req.body.name +
        '\nEmail: ' + req.body.email +
        '\nMessage: ' + req.body.message;
    var mailOptions = {
        from: req.body.name + ' ' + req.body.email,
        to: 'peiniwo@gmail.com',
        subject: 'Someone contact you via portfolio site: ' + req.body.subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send({
                success: false,
                message: 'There was an error while submitting the form. Please try again.'
            });
        }
        res.send({
            success: true,
            message: 'Contact form successfully submitted. Thank you, I will get back to you soon!'
        })
    });
})
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
