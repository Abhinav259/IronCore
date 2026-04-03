const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf8');
content = content.replace(/auto=format&fit=crop/g, 'auto=format&fit=crop&fm=webp');
fs.writeFileSync(dataPath, content);

const blogPath = path.join(__dirname, 'src', 'pages', 'Blog.tsx');
let blogContent = fs.readFileSync(blogPath, 'utf8');
blogContent = blogContent.replace(/<img\s+src=\{post.image\}/g, '<img src={`${post.image}&fm=webp`}');
fs.writeFileSync(blogPath, blogContent);

console.log('Done');
