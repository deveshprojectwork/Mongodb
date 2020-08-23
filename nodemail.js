var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "techbizshow@gmail.com",
    pass: "ADMIN@123",
  },
});

var mailOptions = {
  from: "techbizshow@gmail.com",
  to: "devesh.kr.sri@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
