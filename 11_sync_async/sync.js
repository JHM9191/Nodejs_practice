var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('11_sync_async/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// readFile
console.log('A');
// 비동기식 방법은 3번째 인자로 callback 함수를 넣어야하는데,
// fs.readFile이 더이상 result를 반환하지 않는다.
// callback 을 통해서 결과값을 얻을 수 있게 된다.
var result = fs.readFile('11_sync_async/sample.txt', 'utf8', function(error, result) {
  console.log(result);
});
console.log('C');
// node.js의 성능을 끌어오르기 위해서 비동기적인 방식을 사용해야한다.

// readFileSync 동기적
// readFile 비동기적
// 함수명에서 볼 수 있드시 Node.js는 비동기적 방식을 선호하고 있다는 것을 볼 수가 있다.
