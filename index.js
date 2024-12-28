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

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// CORS 미들웨어 직접 구현
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인에서 접근 허용
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 허용할 HTTP 메소드
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // 허용할 헤더
  next(); // 다음 미들웨어로 넘김
});

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

