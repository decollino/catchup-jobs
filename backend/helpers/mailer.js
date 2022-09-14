import nodemailer from 'nodemailer';

const { MAILING_ID_PRIV, MAILING_SECRET_PRIV } = process.env;

export const sendResetCode = (email, name, code) => {
  const stmp = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: MAILING_ID_PRIV,
      pass: MAILING_SECRET_PRIV,
    },
  });

  const mailOptions = {
    from: MAILING_ID_PRIV,
    to: email,
    subject: 'Reset Tonnie password',
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#5b1b9b"><img src="https://res.cloudinary.com/dd6ezgt6m/image/upload/v1660915926/tonnieLogo_ezn2cc.jpg" alt="" style="width:30px"><span>Action require : Activate your Tonnie account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently asked to reset your password on Tonnie's platform. To
    complete the action, please enter the code below:</span></div><a  style="width:200px;padding:10px 15px;background:#5b1b9b;color:#fff;text-decoration:none;font-weight:600">${code}</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Tonnie Talent ・Address ・Lisbon, PT</span></div></div>`,
  };

  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
