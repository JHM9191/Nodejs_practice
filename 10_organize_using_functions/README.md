# 함수를 이용해서 정리 정돈하기

- 중복된 코드를 함수를 이용해서 반복되는 코드 줄이기.

​       			


```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) {
  return  `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list += '</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(url.parse(_url, true));
    if (pathname === '/') {
      if (queryData.id === undefined) {
        fs.readdir('10_organize_using_functions', function(error, filelist) {
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
          });
      } else {
        fs.readdir('10_organize_using_functions', function(error, filelist) {
          fs.readFile(`./09_out_using_files/${queryData.id}`, 'utf8', function(err, description) {
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
```

​      

​     



### 템플릿 리터럴(Template literal)

- ES6에서의 새로운 문자열 표기법
- 백틱(backtick) 문자 ` 를 사용한다.
- 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백(white-space)를 표현하기 위해서는 백슬래시(\)로 시작하는 이스케이프 시퀀스(Escape Sequence)를 사용하여야 한다.
- 반면, ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며,
- 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용된다.

  ```javascript
  const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  </ul>`;

  console.log(template);
  ```

​      

- 템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공한다.

- 이를 문자열 인터폴레이션(String Interpolation)이라 한다.

  ```javascript
  const first = 'Ung-mo';
  const last = 'Lee';
  
  // ES5: 문자열 연결
  console.log('My name is ' + first + ' ' + last + '.');
  // "My name is Ung-mo Lee."
  
  // ES6: String Interpolation
  console.log(`My name is ${first} ${last}.`);
  // "My name is Ung-mo Lee."
  ```

  ​     

- 문자열 인터폴레이션은 `${ … }`으로 표현식을 감싼다. 

- 문자열 인터폴레이션 내의 표현식은 문자열로 강제 타입 변환된다.

  ```javascript
  console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
  ```

  

  ​	         

  ​       

### REFERENCE

https://poiemaweb.com/es6-template-literals