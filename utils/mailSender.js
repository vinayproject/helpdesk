var nodemailer=require('nodemailer');
const dbcon=require('../config/db/mysql-config');




var maillink=req.protocol + '://' + req.hostname + ':3000/verify/' + u_id + '/' + link


nodemailer.createTestAccount((err, account) => {


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'omkar.vinay0404@gmail.com',
            pass: 9964700208 
        }
    });


    // setup email data with unicode symbols
    let mailOptions = {
        from: 'omkar.vinay0404@gmail.com', // sender address
        to: email, 
        subject: 'Sign Up Confirmation Link', // Subject line
        text: 'Click the link below to verify account', // plain text body
        html: '<b>'+'Click the link below to verify account'+'<br>'+maillink+'</b>' // html body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});
res.json("Confirmation mail has been sent to your mailid Kindly check your mail")
