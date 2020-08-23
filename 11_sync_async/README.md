# 동기와 비동기 그리고 콜백

- Node.js에서 매우 중요한 특징인 비동기 처리 방식을 살펴봅니다. Node.js 실행순서를 파악하는 것이 목적입니다. 

   

### Node.js의 동기와 비동기


```javascript
var fs = require('fs');


// readFileSync
console.log('A');
var result = fs.readFileSync('11_sync_async/sample.txt', 'utf8');
console.log(result);
console.log('C');


// readFile
console.log('A');
var result = fs.readFile('11_sync_async/sample.txt', 'utf8', function(error, result) {
  console.log(result);
});
console.log('C');
      
```

​     

-  fs 모듈에서 제공하고 있는 함수들은 대부분 Sync가 붙여져 있는 함수명과 그렇지 않은 함수가 있다.
- 예를 들어 `readFile`과 `readFileSync` 이 있다.
  - `readFileSync`는 동기적, `readFile` 비동기적을 의미하고,
  - 함수명에서 볼 수 있드시 Node.js는 비동기적 방식을 선호하고 있다는 것을 볼 수가 있다.

​          



- 비동기식 방법은 3번째 인자로 `callback`함수를 넣어야한다.
  - `fs.readFile`은 더이상 result를 반환하지 않는다.
  - `callback`함수를 통해서 결과값을 얻을 수 있게 된다.





- sync : 
  - ![sync](./img/sync.png)
- async : 
  - ![async](./img/async.png)

- 물론 상황에 따라 달라지겠지만, node.js의 성능을 끌어오르기 위해서 비동기적인 방식을 사용해야한다.





### callback의 간단한 설명

- `callback`
  - 작업이 끝난다음에 실행시켜야할 작업이 담긴 함수
  - call back.
    - 나중에 전화해
    - 작업이 끝나면 나를 불러



```````javascript
// function a() {
//   console.log('A');
// }

var a = function() {
  console.log('A');
}


function slowfunc(callback) {
  callback();
}

slowfunc(a);

```````

- `slowfunc(a)`실행
  - `a` 는 `slowfunc(callback)` 에서 `callback` 이며,
  - `callback`은 `a 함수`를 말한다.
  - `slowfunct 함수`에서의 `callback() 함수`는 `a 함수`의 `console.log('A')`를 말한다.



- 결과 :
  - ![callback](./img/callback.png)