const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "viniciusjmacedofreitas@gmail.com",
    subject: "Welcome!",
    text: `Welcome to the app ${name}!`,
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "viniciusjmacedofreitas@gmail.com",
    subject: "Why?",
    text: `Why did you do this ${name}! Give us feedback, pls!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
