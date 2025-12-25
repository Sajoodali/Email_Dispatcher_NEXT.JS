# 📧 Email Dispatcher

A modern, professional email dispatcher application built with **Next.js 16** and **React**. Send beautifully formatted emails with ease through an elegant, user-friendly interface.

![Email Dispatcher](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.11-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Gradient Design** - Beautiful cyan/blue gradient theme matching the Globium Clouds brand
- **Glassmorphism Effects** - Sleek backdrop blur and transparency effects
- **Animated Backgrounds** - Smooth blob animations for visual appeal
- **Skeleton Loading** - Professional loading states for better UX
- **Responsive Design** - Works perfectly on all devices

### 📨 **Email Functionality**
- **Professional Email Templates** - Beautifully designed HTML email templates
- **Real-time Validation** - Form validation using Zod schema
- **SMTP Integration** - Secure email sending via Gmail SMTP
- **Toast Notifications** - User-friendly success/error messages
- **Email Preview** - Consistent branding across all emails

### 🔒 **Security & Reliability**
- **Environment Variables** - Secure credential management
- **Input Validation** - Client and server-side validation
- **Error Handling** - Comprehensive error handling and user feedback
- **Type Safety** - Built with modern JavaScript best practices

### 🚀 **Performance**
- **Next.js 16** - Latest Next.js with Turbopack for blazing-fast builds
- **Optimized Images** - Next.js Image component for optimal loading
- **Code Splitting** - Automatic code splitting for faster page loads
- **ES Modules** - Modern JavaScript module system

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.0
- **Language:** JavaScript (ES Modules)
- **Styling:** Tailwind CSS 3.4.11
- **Form Handling:** React Hook Form + Zod
- **Email Service:** Nodemailer
- **Icons:** Lucide React
- **Notifications:** Sonner
- **UI Components:** Custom components with Tailwind

---

## 📦 Installation

### Prerequisites
- Node.js 18.17.0 or higher
- npm or yarn package manager
- Gmail account with App Password enabled

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GlobiumClouds/Email_Dispatcher.git
   cd Email_Dispatcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

   > **Note:** To get an App Password:
   > 1. Enable 2FA on your Google Account
   > 2. Go to Google Account Settings → Security → App Passwords
   > 3. Generate a new app password for "Mail"

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

1. **Enter Recipient Email** - Type the recipient's email address
2. **Add Subject Line** - Write a clear, descriptive subject
3. **Compose Message** - Type your message in the text area
4. **Send Email** - Click the "Send Email" button
5. **Confirmation** - Receive instant feedback on email delivery

---

## 📁 Project Structure

```
Email-Dispatcher/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.js          # Email sending API endpoint
│   ├── globals.css               # Global styles and theme
│   ├── layout.jsx                # Root layout component
│   └── page.jsx                  # Main email dispatcher page
├── components/
│   ├── EmailTemplate.jsx         # Email HTML template generator
│   └── SkeletonLoader.jsx        # Loading skeleton component
├── lib/
│   └── utils.js                  # Utility functions
├── public/
│   └── GC-Logo.jpg              # Company logo
├── .env.local                    # Environment variables (not in repo)
├── .gitignore                    # Git ignore rules
├── jsconfig.json                 # JavaScript configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

---

## 🎨 Customization

### Change Theme Colors

Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --primary: 200 95% 35%;        /* Cyan-600 */
  --accent: 200 95% 45%;         /* Cyan-500 */
  /* Add your custom colors */
}
```

### Modify Email Template

Edit `components/EmailTemplate.jsx` to customize the email design:

```javascript
export function generateEmailTemplate(message) {
  // Customize HTML template here
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

---

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_EMAIL` | Gmail address for sending emails | ✅ Yes |
| `SMTP_PASSWORD` | Gmail App Password | ✅ Yes |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Globium Clouds**

- Website: [www.globiumclouds.com](https://www.globiumclouds.com)
- Email: globiumclouds@gmail.com
- Location: Karachi, Pakistan

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors

---

## 📞 Support

For support, email globiumclouds@gmail.com or visit our website at [www.globiumclouds.com](https://www.globiumclouds.com).

---

<div align="center">
  <p>Made with ❤️ by Globium Clouds</p>
  <p>© 2025 Globium Clouds. All rights reserved.</p>
</div>
