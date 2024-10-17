export const activation = (url) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Your Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            width: 100%;
            background-color: #ffffff;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            text-align: center;
            padding-bottom: 20px;
        }

        .email-body {
            text-align: left;
            color: #333333;
            line-height: 1.6;
        }

        .email-body h2 {
            color: #2d3748;
        }

        .email-footer {
            text-align: center;
            padding-top: 20px;
            color: #888888;
            font-size: 12px;
        }

        .email-button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .email-button:hover {
            background-color: #45a049;
        }

        .logo img {
            max-width: 150px;
        }
    </style>
</head>

<body>

    <div class="email-container">
        <!-- Header Section -->
        <div class="email-header">
            <div class="logo">
                <img src="https://i.postimg.cc/CKYPgQBt/image.png" alt="Butterfly Books Exchange Logo">
            </div>
        </div>

        <!-- Email Body Section -->
        <div class="email-body">
            <h2>Confirm Your Email for Butterfly- Let your book fly.</h2>

            <p>Dear User,</p>

            <p>Thank you for joining <strong>Butterfly Books Exchange</strong>—your gateway to discovering and sharing amazing books within a community of fellow book lovers.</p>

            <p>To get started, please confirm your email address by clicking the button below:</p>

            <p style="text-align: center;">
                <a href="${url}" class="email-button">Activate My Account</a>
            </p>

            <p>Once activated, you’ll be able to fully explore our platform, exchange books, and connect with others who share your passion for reading. If you did not create an account, please ignore this email.</p>

            <p>If you have any questions or need assistance, feel free to reach out to our support team at faisalshohagprog@gmail.com</p>

            <p>Happy reading,</p>
            <p>The Butterfly Books Exchange Team</p>
            <p><a href="https://butterfly-books.vercel.app/">Visit our website</a></p>
        </div>

        <!-- Footer Section -->
        <div class="email-footer">
            <p>&copy; 2024 Butterfly Books Exchange. All rights reserved.</p>
            <p>For security reasons, this link will expire in 24 hours.</p>
        </div>
    </div>

</body>

</html>
`
}