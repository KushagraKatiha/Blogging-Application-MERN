import nodemailer from 'nodemailer'

const sendMail = async (email, subject, text) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject,
        text
    })
}

export default sendMail
