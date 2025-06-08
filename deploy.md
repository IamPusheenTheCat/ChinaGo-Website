# ChinaGo 网站部署指南

## 📋 部署前检查清单

### 1. 更新配置
- [ ] 修改 `assets/script.js` 中的 App Store URL
- [ ] 更新所有邮箱地址 (help@chinago-ios.app 等)
- [ ] 添加真实的社交媒体链接
- [ ] 确保所有联系信息正确

### 2. 添加图片
```bash
# 将以下图片添加到 assets/images/ 文件夹
- logo.png (120x120px)
- favicon.ico (32x32px) 
- app-preview.png (600x1200px)
- ai-assistant.png (600x400px)
- translation.png (600x400px)
- navigation.png (600x400px)
```

## 🚀 推荐部署方案

### 方案1: Netlify (最简单)

#### 拖拽部署
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账户
3. 将 `website` 文件夹拖拽到部署区域
4. 等待几秒钟完成部署
5. 获得形如 `https://amazing-name-123456.netlify.app` 的地址

#### Git自动部署 (推荐)
```bash
# 1. 创建 Git 仓库
git init
git add .
git commit -m "Initial website commit"

# 2. 推送到 GitHub
git remote add origin https://github.com/yourusername/chinago-website.git
git push -u origin main

# 3. 在 Netlify 中连接仓库
# - 选择 "New site from Git"
# - 连接 GitHub
# - 选择仓库
# - 构建设置留空 (静态站点)
# - 点击 "Deploy site"
```

#### 自定义域名
```bash
# 在 Netlify 控制台中
1. 进入 Site settings > Domain management
2. 点击 "Add custom domain"
3. 输入你的域名 (如 chinago-ios.app)
4. 按提示配置 DNS 记录
```

### 方案2: Vercel

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 在 website 目录中部署
cd website
vercel login  # 首次使用需要登录
vercel

# 3. 按提示操作
# - Project name: chinago-website
# - Set up and deploy: Yes
# - 等待部署完成
```

### 方案3: GitHub Pages

```bash
# 1. 创建 GitHub 仓库
# 访问 github.com，创建新仓库 "chinago-website"

# 2. 上传文件
git init
git add .
git commit -m "Add ChinaGo website"
git remote add origin https://github.com/yourusername/chinago-website.git
git push -u origin main

# 3. 启用 GitHub Pages
# - 在仓库 Settings > Pages
# - Source: Deploy from a branch
# - Branch: main / (root)
# - 保存设置
```

## 🔧 高级配置

### 添加 Google Analytics
```html
<!-- 在每个页面的 <head> 中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 添加搜索引擎优化文件

#### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/features.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/support.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/privacy.html</loc>
    <priority>0.6</priority>
  </url>
</urlset>
```

### 联系表单配置

#### Netlify Forms
```html
<!-- 在 contact.html 的 form 标签中添加 -->
<form class="contact-form" id="contact-form" netlify>
```

#### Formspree (替代方案)
```html
<!-- 注册 formspree.io 并替换表单 action -->
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 🔗 自定义域名设置

### 购买域名
推荐域名注册商：
- Namecheap
- GoDaddy
- Cloudflare

### DNS 配置
```bash
# 对于 Netlify
CNAME www your-netlify-subdomain.netlify.app
A @ 75.2.60.5

# 对于 Vercel  
CNAME www cname.vercel-dns.com
A @ 76.76.19.61
```

## 📊 性能优化

### 图片优化
```bash
# 使用 imagemin 压缩图片
npm install -g imagemin-cli
imagemin assets/images/*.png --out-dir=assets/images/optimized
```

### 代码压缩
```bash
# CSS 压缩
npm install -g clean-css-cli
cleancss -o assets/styles.min.css assets/styles.css

# JS 压缩  
npm install -g uglify-js
uglifyjs assets/script.js -o assets/script.min.js
```

## 🔍 SEO 优化

### 提交到搜索引擎
1. Google Search Console
2. Bing Webmaster Tools
3. 百度站长平台

### Meta 标签优化
确保每个页面都有：
- 独特的 title 标签
- 描述性的 meta description
- Open Graph 标签

## 📱 移动优化验证

### 测试工具
1. Google Mobile-Friendly Test
2. PageSpeed Insights
3. GTmetrix
4. WebPageTest

## 🛡️ 安全设置

### HTTPS 强制
大多数现代托管平台自动提供 HTTPS

### 安全头设置 (Netlify)
```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

## ✅ 部署后检查

- [ ] 所有页面正常加载
- [ ] 所有链接正常工作
- [ ] 表单功能正常
- [ ] 移动端显示正常
- [ ] 加载速度满意
- [ ] SEO 标签完整
- [ ] 联系信息正确

## 📞 获得帮助

如果遇到问题：
1. 查看托管平台的文档
2. 检查浏览器控制台错误
3. 使用开发者工具调试
4. 联系托管平台支持 