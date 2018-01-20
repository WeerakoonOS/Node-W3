var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:false,
  port: 25,
  auth: {
    user: 'weerakoonoshani@gmail.com',
    pass: 'hambantota'
    },
    tls: {
        rejectUnauthorized: false
    }

});

var mailOptions = {
  from: 'weerakoonoshani@gmail.com',
  to: 'oshaniweerakoon@ieee.org',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
