const nodemailer = require('nodemailer');
const utils = require('./utils').utils;
class Email {
    constructor(){
        this.smtpSetup = {
            service : utils.smtp.provider,
            auth :{
                user : utils.smtp.address,
                pass : utils.smtp.password
            }
        }
        // configure the smtp settings
        this.mailer = nodemailer.createTransport(this.smtpSetup);
    }
    email(userObj){
        // in case sender isnt mentioned
        if(userObj.from == null){
            userObj.from = utils.smtp.address;
        }
        this.mailer.sendMail({
            from : userObj.from,
            to : userObj.to,
            subject : userObj.subject,
            /*text : emailBody, */
            html : userObj.body
        },(err,response)=>{
            if(err){
                console.log(err);
                return "Unable to send email";
            }else{
                console.log('Email Sent');
                return "Email Sent Successfully";
            }
        })
    }
}
module.exports.Email = Email;