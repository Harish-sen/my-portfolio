# Reactfolio V1.2 👩🏽‍🚀
## 🤔 FAQ

**Q1. Subpages can only be accessed through links on the homepage or navigation bar, but those pages are not accessible through direct links.**

If you are using Apache as your web server, you can insert this into your .htaccess file:

```c
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## 🌱 Contribution

If you have any suggestions on what to improve in Reactfolio and would like to share them, feel free to leave an issue or fork project to implement your own ideas
