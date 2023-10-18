function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/* 数组处理 */
// 1. 从数组中移除重复项
var removeDuplicates = function removeDuplicates(arr) {
  return _toConsumableArray(new Set(arr));
};
// 2. 判断数组是否为空
var isNotEmpty = function isNotEmpty(arr) {
  return Array.isArray(arr) && arr.length > 0;
};
// 12. 合并两个数组
var merge = function merge(a, b) {
  return a.concat(b);
};

/* 浏览器操作 */
// 1. 复制内容到剪切板
var copyToClipboard = function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
};
// 2. 清除所有cookie
var clearCookies = document.cookie.split(';').forEach(function (cookie) {
  return document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date(0).toUTCString(), ";path=/"));
});
// 3. 获取选中的文本  
var getSelectedText = function getSelectedText() {
  return window.getSelection().toString();
};
// 4. 检测是否是黑暗模式
var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
// 5. 滚动到页面顶部
var goToTop = function goToTop() {
  return window.scrollTo(0, 0);
};
// 6. 判断当前标签页是否激活
var isTabInView = function isTabInView() {
  return !document.hidden;
};
// 7. 判断当前是否是苹果设备
var isAppleDevice = function isAppleDevice() {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
};
// 8. 是否滚动到页面底部
var scrolledToBottom = function scrolledToBottom() {
  return document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
};
// 9. 重定向到一个URL
var redirect = function redirect(url) {
  return location.href = url;
};
// 10. 打开浏览器打印框
var showPrintDialog = function showPrintDialog() {
  return window.print();
};

/* 一、日期处理 */
// 1. 检查日期是否有效
var isDateValid = function isDateValid() {
  for (var _len = arguments.length, val = new Array(_len), _key = 0; _key < _len; _key++) {
    val[_key] = arguments[_key];
  }
  return !Number.isNaN(_construct(Date, val).valueOf());
};
// 2. 计算两个日期之间的间隔
var dayDif = function dayDif(date1, date2) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
};
// 3. 查找日期位于一年中的第几天
var dayOfYear = function dayOfYear(date) {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};
// 4. 时间格式化
var timeFromDate = function timeFromDate(date) {
  return date.toTimeString().slice(0, 8);
};

/* 数字操作 */
// 1. 判断一个数是奇数还是偶数
var isEven = function isEven(num) {
  return num % 2 === 0;
};
// 2. 获得一组数的平均值
var average = function average() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};
// 3. 获取两个整数之间的随机整数
var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// 4. 指定位数四舍五入
var round = function round(n, d) {
  return Number(Math.round(n + "e" + d) + "e-" + d);
};
// 5. 将RGB转化为十六机制
var rgbToHex = function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
// 6. 获取随机十六进制颜色
var randomHex = function randomHex() {
  return "#".concat(Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0"));
};

/* 字符串处理 */
// 1. 字符串首字母大写
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// 2. 翻转字符串
var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};
// 3. 随机字符串
var randomString = function randomString() {
  return Math.random().toString(36).slice(2);
};
// 4. 截断字符串
var truncateString = function truncateString(string, length) {
  return string.length < length ? string : "".concat(string.slice(0, length - 3), "...");
};
// 5. 去除字符串中的HTML
var stripHtml = function stripHtml(html) {
  return new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
};

/* 其他操作 */
// 1. 随机布尔值
var randomBoolean = function randomBoolean() {
  return Math.random() >= 0.5;
};
// 2. 获取变量的类型
var trueTypeOf = function trueTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
// 3. 检测对象是否为空
var isEmpty = function isEmpty(obj) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
};

var index = {
  removeDuplicates: removeDuplicates,
  isNotEmpty: isNotEmpty,
  merge: merge,
  copyToClipboard: copyToClipboard,
  clearCookies: clearCookies,
  getSelectedText: getSelectedText,
  isDarkMode: isDarkMode,
  goToTop: goToTop,
  isTabInView: isTabInView,
  isAppleDevice: isAppleDevice,
  scrolledToBottom: scrolledToBottom,
  redirect: redirect,
  showPrintDialog: showPrintDialog,
  isDateValid: isDateValid,
  dayDif: dayDif,
  dayOfYear: dayOfYear,
  timeFromDate: timeFromDate,
  isEven: isEven,
  average: average,
  random: random,
  round: round,
  rgbToHex: rgbToHex,
  randomHex: randomHex,
  capitalize: capitalize,
  reverse: reverse,
  randomString: randomString,
  truncateString: truncateString,
  stripHtml: stripHtml,
  randomBoolean: randomBoolean,
  trueTypeOf: trueTypeOf,
  isEmpty: isEmpty
};

export { index as default };
