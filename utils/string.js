/* 字符串处理 */
// 1. 字符串首字母大写
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
// 2. 翻转字符串
export const reverse = str => str.split('').reverse().join('');
// 3. 随机字符串
export const randomString = () => Math.random().toString(36).slice(2);
// 4. 截断字符串
export const truncateString = (string, length) => string.length < length ? string :
`${string.slice(0, length - 3)}...`;
// 5. 去除字符串中的HTML
export const stripHtml = html => (new DOMParser().parseFromString(html,
  'text/html')).body.textContent || '';