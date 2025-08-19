<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message - digiOH</title>
    <style>
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f3f9ff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #12234F 0%, #5B82C3 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            font-family: 'Bebas Neue', Arial, sans-serif;
            font-size: 28px;
            margin: 0;
            letter-spacing: 2px;
        }
        .content {
            padding: 30px 20px;
        }
        .message-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #5B82C3;
        }
        .info-row {
            display: flex;
            margin-bottom: 10px;
        }
        .info-label {
            font-weight: 600;
            color: #12234F;
            width: 100px;
            flex-shrink: 0;
        }
        .info-value {
            color: #666;
        }
        .message-content {
            background-color: white;
            padding: 20px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            margin-top: 20px;
        }
        .message-content h3 {
            color: #12234F;
            margin-top: 0;
            font-family: 'Bebas Neue', Arial, sans-serif;
            font-size: 18px;
            letter-spacing: 1px;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        .footer p {
            margin: 0;
            color: #666;
            font-size: 14px;
        }
        .badge {
            background-color: #FBBC51;
            color: #12234F;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 NEW CONTACT MESSAGE</h1>
            <p>digiOH Website Contact Form</p>
        </div>
        
        <div class="content">
            <div class="message-info">
                <div class="info-row">
                    <span class="info-label">From:</span>
                    <span class="info-value">{{ $message->name }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">{{ $message->email }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Subject:</span>
                    <span class="info-value">{{ $message->subject ?? 'No Subject' }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Date:</span>
                    <span class="info-value">{{ $message->created_at->format('M j, Y \a\t g:i A') }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-value"><span class="badge">New Message</span></span>
                </div>
            </div>
            
            <div class="message-content">
                <h3>MESSAGE CONTENT</h3>
                <p>{{ $message->message }}</p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>digiOH</strong> - Digital Events & Signage Solutions</p>
            <p>This message was sent through your website contact form.</p>
            <p style="margin-top: 10px;">
                <a href="mailto:{{ $message->email }}" style="color: #5B82C3; text-decoration: none;">
                    📧 Reply to {{ $message->name }}
                </a>
            </p>
        </div>
    </div>
</body>
</html>