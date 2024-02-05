# char-counts

`char-counts`是一个简单的 npm 包，用于计算一个字符串中每个字符的出现次数。

## 安装

使用 npm 安装：

```
npm install char-counts
```

## 使用

```javascript
const charCounts = require("char-counts");

const counts = charCounts("hello world");

console.log(counts);
// 输出：{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
```

## 错误处理

如果输入不是字符串，`charCounts`会抛出一个错误。
