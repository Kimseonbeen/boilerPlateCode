// 초기 설정 시 
// npx sequlize init 해주기
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
// 개발 포트, 배포 포트 다르게 사용하기 위함
app.set('port', process.env.PORT || 8001);  //process.env.PORT를 앞에 쓰는 이유는 나중에 배포할때 433 or 80 포트 사용하기 위해

app.use(cors());
app.use('/api', (req, res)=> res.json({username:'seonbin'}));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 인자 4개
// next 안 쓰더라도 생략 X
app.use((err, req, res, next) => {
  // res.locals = 템플릿 엔진에서 에러 처리 위함
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});