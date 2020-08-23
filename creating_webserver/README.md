# 웹서버 만들기

- Nodejs 언어는 웹서버도 만드는 기능을 가지고 있다.
- 톰캣, Nginx 등 이 할 수 있는 기능 이상으로 구현할 수 있다. (우리가 직접 만들 수 있기 때문이라 생각됨.)

```javascript
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    console.log(url);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
```



- `response.end(fs.readFileSync(__dirname + url));`
  - `response.end` 함수는 괄호 안에 있는 값/경로를 화면에 출력한다.
  - `__dirname + url` :
    - /Users/johyunmin/Documents/work/Nodejs_practice/creating_webserver/index.html
  - `__dirname` : 
    - /Users/johyunmin/Documents/work/Nodejs_practice/creating_webserver
  - `url` : 
    - /index.html
  - `response.end('HTML');` 의 결과: 화면에 HTML이라 출력이 된다.



- `app.listen(3000)`
  - 우리가 만든 웹서버의 포트번호를 지정해주는 역할은 한다.
  - 3000번 포트로 지정해주었다.

