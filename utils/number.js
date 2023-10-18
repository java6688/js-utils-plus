/* 数字操作 */
// 1. 判断一个数是奇数还是偶数
export const isEven = num => num % 2 === 0;
// 2. 获得一组数的平均值
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// 3. 获取两个整数之间的随机整数
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// 4. 指定位数四舍五入
export const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)
// 5. 将RGB转化为十六机制
export const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) +
b).toString(16).slice(1);
// 6. 获取随机十六进制颜色
export const randomHex = () => `#${Math.floor(Math.random() *
  0xffffff).toString(16).padEnd(6, "0")}`;