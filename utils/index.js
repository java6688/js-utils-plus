/* 其他操作 */
// 1. 随机布尔值
export const randomBoolean = () => Math.random() >= 0.5;
// 2. 获取变量的类型
export const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
// 3. 检测对象是否为空
export const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;