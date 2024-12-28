const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy route to another website
app.use('/proxy', createProxyMiddleware({
  target: 'https://www.example.com', // 이 URL을 원하는 사이트로 변경
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // /proxy를 제거하고 요청을 전송
  },
}));

app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
