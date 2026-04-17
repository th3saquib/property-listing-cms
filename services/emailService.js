const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendLeadNotification(lead) {
  const mailOptions = {
    from: `"Property CMS" <${process.env.SMTP_USER}>`,
    to: process.env.LEAD_NOTIFY_EMAIL,
    subject: `🔥 New Lead: ${lead.name}`,
    html: `
      <h2>New Lead Inquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td><strong>Name</strong></td><td>${lead.name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${lead.phone}</td></tr>
        <tr><td><strong>Email</strong></td><td>${lead.email || 'N/A'}</td></tr>
        <tr><td><strong>Budget</strong></td><td>₹${lead.budget || 'Not specified'}</td></tr>
        <tr><td><strong>Interest</strong></td><td>${lead.property_interest || 'General'}</td></tr>
        <tr><td><strong>Message</strong></td><td>${lead.message || '-'}</td></tr>
        <tr><td><strong>Source</strong></td><td>${lead.source}</td></tr>
      </table>
    `
  };
  return transporter.sendMail(mailOptions);
}

module.exports = { sendLeadNotification };
