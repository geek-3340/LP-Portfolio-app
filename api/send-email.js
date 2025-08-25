import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    // Gmailアカウントを使う場合（2段階認証が有効なら「アプリパスワード」を利用）
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER, // Gmailアドレス
            pass: process.env.MAIL_PASS, // アプリパスワード
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_TO, // 受信先（自分のアドレス）
            subject: 'お問い合わせが届きました',
            text: `名前: ${name}\nメール: ${email}\n\n${message}`,
        });

        res.status(200).json({ message: 'メール送信成功！' });
    } catch (err) {
        res.status(500).json({
            error: 'メール送信に失敗しました',
            details: err,
        });
    }
}
