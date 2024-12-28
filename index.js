const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 웹 페이지 파일을 서빙하는 미들웨어
app.use(express.static(path.join(__dirname, 'public')));

// 프록시 요청 처리
app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the page');
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
