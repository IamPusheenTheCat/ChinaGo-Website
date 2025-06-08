# ChinaGo Website

A modern, responsive website for the ChinaGo travel assistant iOS app.

## 📁 Structure

```
website/
├── index.html          # Homepage with brand showcase
├── features.html       # Product features and services
├── about.html         # About us and company info
├── contact.html       # Contact form and information
├── support.html       # Help center and FAQ
├── privacy.html       # Privacy policy (App Store required)
├── assets/
│   ├── styles.css     # Main stylesheet
│   ├── script.js      # JavaScript functionality
│   └── images/        # Website images (to be added)
└── README.md          # This file
```

## 🌟 Features

### Homepage (index.html)
- Hero section with call-to-action
- Feature overview
- Target audience sections
- Statistics and social proof
- Download buttons with iOS detection

### Features Page (features.html)
- Detailed feature explanations
- Travel guide categories
- Technical specifications
- System requirements
- Integration details

### About Page (about.html)
- Company mission and vision
- Team information
- Company story timeline
- Core values
- Statistics

### Contact Page (contact.html)
- Contact form with validation
- Multiple contact methods
- FAQ section
- Office hours
- Social media links

### Support Page (support.html)
- Comprehensive help center
- Getting started guides
- Feature tutorials
- Troubleshooting
- FAQ accordion

### Privacy Policy (privacy.html)
- App Store compliant privacy policy
- Table of contents navigation
- Detailed data handling explanation
- GDPR compliance
- Contact information for privacy queries

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with iOS-inspired elements
- **Accessibility**: Proper contrast, semantic HTML, keyboard navigation
- **Performance**: Optimized CSS and JavaScript
- **SEO Friendly**: Proper meta tags, structured content
- **Interactive Elements**: Smooth animations, hover effects

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript**: ES6+ for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Typography (system fonts as fallback)

## 📱 iOS Integration

- **App Store Detection**: Automatically detects iOS devices
- **Download Handling**: Direct App Store links for iOS users
- **Information Modal**: Helpful message for non-iOS users
- **Deep Linking**: Ready for app-specific URL schemes

## 🛠️ Setup and Deployment

### Local Development
1. Clone or download the website files
2. Open `index.html` in a web browser
3. For full functionality, serve via a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Deployment Options

#### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Upload to repository
- **AWS S3**: Static website hosting
- **Cloudflare Pages**: Git integration

#### Traditional Hosting
- Upload files to web server
- Ensure all paths are correct
- Configure SSL certificate

## 📋 Customization

### Updating Content
1. **App Store URL**: Update the App Store link in `assets/script.js`
2. **Contact Information**: Update email addresses throughout
3. **Company Information**: Modify team details in `about.html`
4. **Features**: Add or modify features in `features.html`

### Styling
- **Colors**: Modify CSS variables in `assets/styles.css`
- **Fonts**: Update font-family declarations
- **Layout**: Adjust grid and flexbox properties

### Images
Add the following images to `assets/` folder:
- `logo.png` - Company logo
- `app-preview.png` - App screenshot
- `favicon.ico` - Browser favicon
- Team photos and feature illustrations

## 🔧 Configuration

### Analytics
Add Google Analytics or other tracking:
```html
<!-- Add to <head> section of each page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO
- Update meta descriptions for each page
- Add Open Graph tags for social sharing
- Create and submit sitemap.xml
- Add robots.txt file

### Contact Form
For production, integrate with:
- **Formspree**: Simple form handling
- **Netlify Forms**: Built-in form processing
- **EmailJS**: Client-side email sending
- **Custom Backend**: Node.js/Python server

## 📊 Performance

### Optimization
- **Images**: Compress and use WebP format
- **CSS**: Minify for production
- **JavaScript**: Minify and bundle
- **Fonts**: Use font-display: swap

### Loading Speed
- Optimize images (WebP, proper sizing)
- Use CDN for assets
- Enable gzip compression
- Implement lazy loading

## ✅ Checklist

Before going live:
- [ ] Update all placeholder content
- [ ] Add real images
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Validate HTML/CSS
- [ ] Test accessibility
- [ ] Submit to search engines

## 📞 Support

For questions about this website:
- Check the code comments
- Review the CSS for styling questions
- Test JavaScript functionality in browser console

## 📄 License

This website template is created for the ChinaGo travel assistant app. 
Modify as needed for your specific use case.

---

**Made with ❤️ for travelers exploring China** 