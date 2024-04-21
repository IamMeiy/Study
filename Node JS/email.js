var mailer = require('nodemailer');

var transporter = mailer.createTransport({
    service:'gmail',
    port:587,
    secure:false,
    auth:{
        from:'donmeiyarasan@gmail.com',
        pass:'oimmdpbulgdweeez'
    }
});

var mailOptions = {
    from:'donmeiyarasan@gmail.com',
    to:'mackmeiyarasan@gmail.com',
    subject:'Just Testing',
    text:'Welcome'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent', info.response);
    }
});