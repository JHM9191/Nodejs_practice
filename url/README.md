# URL의 이해

![url](./img/url.png)

- `쿼리스트링(Query String)`

  - path 뒤에 물음표 다음으로 오는 글자
  - 웹서버에 데이터를 보낼 때 사용된다.

  



# Node.js에서 URL을 통해서 입력된 값을 사용하는 방법

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(queryData.id); 

});
app.listen(3000);

```



- `var url = require('url');`
  - url이라는 모듈을 url이라는 이름으로 사용한다는 것이다.

- `var queryData = url.parse(_url, true).query;`
  - `url.parse().query `:
    - 요청된 url 값을 parse 하여 query object를 추출한다.
    - `Localhost:3000/id=HTML` 이라는 url 로 요청하였을 때 : 
      - `console.log(queryData)`의 결과물은 `{ id: 'HTML' }`
      - `console.log(queryData.id)`의 결과물은 `HTML`
