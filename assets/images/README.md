# Website Images

This folder should contain all the images used in the ChinaGo website.

## Required Images

### Logo and Branding
- `logo.png` (120x120px) - Main logo for navigation and footer
- `favicon.ico` (32x32px) - Browser favicon
- `app-icon.png` (512x512px) - High-resolution app icon

### Screenshots and Mockups
- `app-preview.png` (600x1200px) - iPhone mockup showing the app
- `app-screenshot-1.png` (375x812px) - Main app interface
- `app-screenshot-2.png` (375x812px) - Translation feature
- `app-screenshot-3.png` (375x812px) - Navigation feature

### Feature Illustrations
- `ai-assistant.png` (600x400px) - AI assistant illustration
- `translation.png` (600x400px) - Translation feature illustration
- `navigation.png` (600x400px) - Navigation feature illustration
- `why-choose.png` (600x400px) - Why choose ChinaGo illustration
- `mission.png` (600x400px) - Company mission illustration
- `vision.png` (600x400px) - Company vision illustration

### Team Photos
- `team-ceo.png` (200x200px) - CEO photo
- `team-cto.png` (200x200px) - CTO photo
- `team-design.png` (200x200px) - Design lead photo

### Support and Contact
- `support-team.png` (600x400px) - Support team illustration
- `device-compatibility.png` (600x400px) - Device compatibility illustration

## Image Guidelines

### Format
- Use WebP format for better compression (with PNG fallbacks)
- PNG for images with transparency
- JPG for photos and complex images

### Optimization
- Compress all images before use
- Use appropriate resolution for retina displays
- Provide 2x versions for high-DPI displays

### Naming Convention
- Use lowercase letters
- Use hyphens for spaces
- Be descriptive but concise

### Dimensions
- All images should be optimized for web
- Maximum width: 1200px for large images
- Maintain aspect ratios as specified
- Consider mobile viewport sizes

## Placeholder Images

Until real images are available, you can use:
- [Unsplash](https://unsplash.com) for high-quality stock photos
- [Lorem Picsum](https://picsum.photos) for placeholder images
- [Pexels](https://pexels.com) for free stock images

## Usage in HTML

```html
<!-- Regular image -->
<img src="assets/images/logo.png" alt="ChinaGo Logo" class="logo-img">

<!-- Responsive image with WebP support -->
<picture>
  <source srcset="assets/images/app-preview.webp" type="image/webp">
  <img src="assets/images/app-preview.png" alt="ChinaGo App Preview" class="app-screenshot">
</picture>

<!-- High-DPI support -->
<img src="assets/images/logo.png" 
     srcset="assets/images/logo.png 1x, assets/images/logo@2x.png 2x" 
     alt="ChinaGo Logo">
```

## Current Status

📁 This folder is currently empty. Add images according to the specifications above to complete the website.

---

**Note**: Remember to optimize all images for web use and test loading times after adding images. 