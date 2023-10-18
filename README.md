# rollup打包常用js工具库

# Installation
```bash
# npm
$ npm install js-utils-plus
```
# Usage
```javascript
// 全部引入
import LiuUtils from 'js-utils-plus'
// 按需引入
import { isDateValid, dayDif } from 'js-utils-plus'
```
## Document
js-utils-plus.js
```javascript
/* 一、日期处理 */
// 1. 检查日期是否有效
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
// 2. 计算两个日期之间的间隔
export const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime())
/ 86400000)
// 3. 查找日期位于一年中的第几天
export const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) /
1000 / 60 / 60 / 24);
// 4. 时间格式化
export const timeFromDate = date => date.toTimeString().slice(0, 8);

/* 二、字符串处理 */
// 5. 字符串首字母大写
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
// 6. 翻转字符串
export const reverse = str => str.split('').reverse().join('');
// 7. 随机字符串
export const randomString = () => Math.random().toString(36).slice(2);
// 8. 截断字符串
export const truncateString = (string, length) => string.length < length ? string :
`${string.slice(0, length - 3)}...`;
// 9. 去除字符串中的HTML
export const stripHtml = html => (new DOMParser().parseFromString(html,
  'text/html')).body.textContent || '';

/* 三、数组处理 */
// 10. 从数组中移除重复项
export const removeDuplicates = (arr) => [...new Set(arr)];
// 11. 判断数组是否为空
export const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
// 12. 合并两个数组
export const merge = (a, b) => a.concat(b);

/* 四、数字操作 */
// 13. 判断一个数是奇数还是偶数
export const isEven = num => num % 2 === 0;
// 14. 获得一组数的平均值
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// 15. 获取两个整数之间的随机整数
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// 16. 指定位数四舍五入
export const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)
// 17. 将RGB转化为十六机制
export const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) +
b).toString(16).slice(1);
// 18. 获取随机十六进制颜色
export const randomHex = () => `#${Math.floor(Math.random() *
  0xffffff).toString(16).padEnd(6, "0")}`;

/* 六、浏览器操作 */
// 19. 复制内容到剪切板
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// 20. 清除所有cookie
export const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie =
  cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new
  Date(0).toUTCString()};path=/`));
// 21. 获取选中的文本  
export const getSelectedText = () => window.getSelection().toString();
// 22. 检测是否是黑暗模式
export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches
// 23. 滚动到页面顶部
export const goToTop = () => window.scrollTo(0, 0);
// 24. 判断当前标签页是否激活
export const isTabInView = () => !document.hidden;
// 25. 判断当前是否是苹果设备
export const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// 26. 是否滚动到页面底部
export const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
// 27. 重定向到一个URL
export const redirect = url => location.href = url
// 28. 打开浏览器打印框
export const showPrintDialog = () => window.print()

/* 七、其他操作 */
// 29. 随机布尔值
export const randomBoolean = () => Math.random() >= 0.5;
// 30. 获取变量的类型
export const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
// 31. 检测对象是否为空
export const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
```